import React, { CSSProperties, ReactNode } from 'react';
import cx from 'classnames';

import {
  ANIMATION_STATE_CLASSES,
  omitProps as omit,
  isNumber,
  isPercentage,
  startAnimationHelper,
  runCallback,
  PROPS_TO_OMIT
} from './animateHeightUtils';


class AnimateHeight extends React.Component<Props, State> {
  static defaultProps = {
    animateOpacity: false,
    animationStateClasses: ANIMATION_STATE_CLASSES,
    applyInlineTransitions: true,
    onAnimationStart: () => {},
    onAnimationEnd: () => {},
    duration: 250,
    delay: 0,
    easing: 'ease',
    style: {}
  };


  animationStateClasses?:AnimationStateClasses | null = {};


  contentElement:React.RefObject<HTMLDivElement>;


  timeoutID: NodeJS.Timeout | null = null;


  animationClassesTimeoutID: NodeJS.Timeout | null = null;


  constructor(props: Props) {
    super(props);

    let height: string | number = 'auto';
    let overflow = 'visible';

    if (isNumber(props.height as string)) {
      // If value is string "0" make sure we convert it to number 0
      height = ((props.height as number) < 0 || props.height === '0' ? 0 : props.height) as number;
      overflow = 'hidden';

    } else if (isPercentage(props.height as number)) {
      // If value is string "0%" make sure we convert it to number 0
      height = (props.height === '0%' ? 0 : props.height) as number;
      overflow = 'hidden';

    } else if (props.height === 'auto') {
      height = 'auto';
      overflow = 'visible';
    }

    this.animationStateClasses = { ...ANIMATION_STATE_CLASSES, ...props.animationStateClasses };
    this.contentElement = React.createRef();

    const animationStateClasses = this.getStaticStateClasses(height);

    this.state = {
      animationStateClasses,
      height,
      overflow,
      shouldUseTransitions: false
    };
  }


  componentDidMount() {
    const { height } = this.state;

    // Hide content if height is 0 (to prevent tabbing into it)
    // Check for contentElement is added cause this would fail in tests (react-test-renderer)
    // Read more here: https://github.com/Stanko/react-animate-height/issues/17
    if (this.contentElement && this.contentElement?.current?.style) {
      this.hideContent(height);
    }
  }


  componentDidUpdate(prevProps: Props, prevState: State) {
    const {
      delay,
      duration,
      height,
      onAnimationEnd,
      onAnimationStart
    } = this.props;

    // Check if 'height' prop has changed
    if (this.contentElement && height !== prevProps.height) {
      // Remove display: none from the content div
      // if it was hidden to prevent tabbing into it
      this.showContent(prevState.height);

      // Cache content height
      if (this.contentElement.current) this.contentElement.current.style.overflow = 'hidden';
      const contentHeight = this.contentElement?.current?.offsetHeight;

      if (this.contentElement.current) this.contentElement.current.style.overflow = '';

      // set total animation time
      const totalDuration = (duration || 250) + (delay || 0);

      let newHeight: (string | number | null | undefined) = null;
      const timeoutState:any = {
        height: null, // it will be always set to either 'auto' or specific number
        overflow: 'hidden'
      };
      const isCurrentHeightAuto = prevState.height === 'auto';


      if (isNumber(height as string)) {
        // If value is string "0" make sure we convert it to number 0
        newHeight = (height as number) < 0 || height === '0' ? 0 : height;
        timeoutState.height = newHeight;

      } else if (isPercentage(height as string)) {
        // If value is string "0%" make sure we convert it to number 0
        newHeight = height === '0%' ? 0 : height;
        timeoutState.height = newHeight;

      } else {
        // If not, animate to content height
        // and then reset to auto
        newHeight = contentHeight; // TODO solve contentHeight = 0
        timeoutState.height = 'auto';
        timeoutState.overflow = 'visible';
      }

      if (isCurrentHeightAuto) {
        // This is the height to be animated to
        timeoutState.height = newHeight;

        // If previous height was 'auto'
        // set starting height explicitly to be able to use transition
        newHeight = contentHeight;
      }

      // Animation classes
      const animationStateClasses = cx({
        [this.animationStateClasses?.animating as string]: true,
        [this.animationStateClasses?.animatingUp as string]: prevProps.height === 'auto' || (height as number < (prevProps.height as number)),
        [this.animationStateClasses?.animatingDown as string]: height === 'auto' || height as number > (prevProps.height as number),
        [this.animationStateClasses?.animatingToHeightZero as string]: timeoutState.height === 0,
        [this.animationStateClasses?.animatingToHeightAuto as string]: timeoutState.height === 'auto',
        [this.animationStateClasses?.animatingToHeightSpecific as string]: timeoutState.height > 0
      });

      // Animation classes to be put after animation is complete
      const timeoutAnimationStateClasses = this.getStaticStateClasses(timeoutState.height);

      // Set starting height and animating classes
      // We are safe to call set state as it will not trigger infinite loop
      // because of the "height !== prevProps.height" check
      this.setState({ // eslint-disable-line react/no-did-update-set-state
        animationStateClasses,
        height: newHeight as string | number,
        overflow: 'hidden',
        // When animating from 'auto' we first need to set fixed height
        // that change should be animated
        shouldUseTransitions: !isCurrentHeightAuto
      });

      // Clear timeouts
      clearTimeout(this.timeoutID as NodeJS.Timeout);
      clearTimeout(this.animationClassesTimeoutID as NodeJS.Timeout);

      if (isCurrentHeightAuto) {
        // When animating from 'auto' we use a short timeout to start animation
        // after setting fixed height above
        timeoutState.shouldUseTransitions = true;

        startAnimationHelper(() => {
          this.setState(timeoutState);

          // ANIMATION STARTS, run a callback if it exists
          runCallback(onAnimationStart, { newHeight: timeoutState.height });
        });

        // Set static classes and remove transitions when animation ends
        this.animationClassesTimeoutID = setTimeout(() => {
          this.setState({
            animationStateClasses: timeoutAnimationStateClasses,
            shouldUseTransitions: false
          });

          // ANIMATION ENDS
          // Hide content if height is 0 (to prevent tabbing into it)
          this.hideContent(timeoutState.height);
          // Run a callback if it exists
          runCallback(onAnimationEnd, { newHeight: timeoutState.height });
        }, totalDuration);

      } else {
        // ANIMATION STARTS, run a callback if it exists
        runCallback(onAnimationStart, { newHeight });

        // Set end height, classes and remove transitions when animation is complete
        this.timeoutID = setTimeout(() => {
          timeoutState.animationStateClasses = timeoutAnimationStateClasses;
          timeoutState.shouldUseTransitions = false;

          this.setState(timeoutState);

          // ANIMATION ENDS
          // If height is auto, don't hide the content
          // (case when element is empty, therefore height is 0)
          if (height !== 'auto') {
            // Hide content if height is 0 (to prevent tabbing into it)
            this.hideContent(newHeight as string | number); // TODO solve newHeight = 0
          }

          // Run a callback if it exists
          runCallback(onAnimationEnd, { newHeight });
        }, totalDuration);
      }
    }
  }


  componentWillUnmount() {
    clearTimeout(this.timeoutID as NodeJS.Timeout);
    clearTimeout(this.animationClassesTimeoutID as NodeJS.Timeout);
    this.timeoutID = null;
    this.animationClassesTimeoutID = null;
    this.animationStateClasses = null;
  }


  showContent(height: string | number) {
    if (height === 0 && this.contentElement?.current) {
      this.contentElement.current.style.display = '';
    }
  }


  hideContent(newHeight: string | number) {
    if (newHeight === 0 && this.contentElement?.current) {
      this.contentElement.current.style.display = 'none';
    }
  }


  getStaticStateClasses(height: string | number) {
    return cx({
      [this.animationStateClasses?.static as string]: true,
      [this.animationStateClasses?.staticHeightZero as string]: height === 0,
      [this.animationStateClasses?.staticHeightSpecific as string]: height > 0,
      [this.animationStateClasses?.staticHeightAuto as string]: height === 'auto'
    });
  }


  render() {
    const {
      animateOpacity,
      applyInlineTransitions,
      children,
      className,
      contentClassName,
      duration,
      easing,
      delay,
      style
    } = this.props;
    const {
      height,
      overflow,
      animationStateClasses,
      shouldUseTransitions
    } = this.state;


    const componentStyle = {
      ...style,
      height,
      overflow: overflow || style?.overflow
    };

    if (shouldUseTransitions && applyInlineTransitions) {
      componentStyle.transition = `height ${duration}ms ${easing} ${delay}ms`;

      // Include transition passed through styles
      if (style?.transition) {
        componentStyle.transition = `${style.transition}, ${componentStyle.transition}`;
      }

      // Add webkit vendor prefix still used by opera, blackberry...
      componentStyle.WebkitTransition = componentStyle.transition;
    }

    const contentStyle:React.CSSProperties = {
      display: height === 0 ? 'none' : 'block'
    };

    if (animateOpacity) {
      contentStyle.transition = `opacity ${duration}ms ${easing} ${delay}ms`;
      // Add webkit vendor prefix still used by opera, blackberry...
      contentStyle.WebkitTransition = contentStyle.transition;

      if (height === 0) {
        contentStyle.opacity = 0;
      }
    }

    const componentClasses = cx({
      [animationStateClasses]: true,
      [className as string]: className
    });

    return (
      <div
        {...omit(this.props, ...PROPS_TO_OMIT)}
        aria-hidden={height === 0}
        className={componentClasses}
        style={componentStyle}
      >
        <div
          className={contentClassName}
          style={contentStyle}
          ref={this.contentElement}
        >
          {children}
        </div>
      </div>
    );
  }
};


type AnimationStateClasses = {
  animating?: string;
  animatingUp?: string;
  animatingDown?: string;
  animatingToHeightZero?: string;
  animatingToHeightAuto?: string;
  animatingToHeightSpecific?: string;
  static?: string;
  staticHeightZero?: string;
  staticHeightAuto?: string;
  staticHeightSpecific?: string;
};


type Props = {
  animateOpacity?: boolean;
  animationStateClasses?: AnimationStateClasses;
  applyInlineTransitions?: boolean;
  children: ReactNode | ReactNode[];
  className?: string;
  contentClassName?: string;
  delay?: number;
  duration?: number;
  easing?: 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | string;
  height?: string | number;
  onAnimationEnd?: (props: { newHeight: number })=>void;
  onAnimationStart?: (props: { newHeight: number })=>void;
  style?: CSSProperties;
};


type State = {
  animationStateClasses: string;
  height: string | number;
  overflow: string;
  shouldUseTransitions: boolean;
}


export default AnimateHeight;
