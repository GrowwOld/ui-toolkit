import React from 'react';
import cn from 'classnames';

import './rodal.css';

// env
const IN_BROWSER = typeof window !== 'undefined';
const UA = IN_BROWSER && window.navigator.userAgent.toLowerCase();
const IS_IE_9 = UA && UA.indexOf('msie 9.0') > 0;


const Dialog = (props: DialogProps) => {
  const animation =
    (props.animationType === 'enter'
      ? props.enterAnimation
      : props.leaveAnimation) || props.animation;

  const className = `rodal-dialog rodal-${animation}-${props.animationType}`;

  const { width, height, measure, duration } = props;

  const style = {
    width: width + measure,
    height: height + measure,
    animationDuration: duration + 'ms',
    WebkitAnimationDuration: duration + 'ms'
  };

  const mergedStyles = { ...style };

  return (
    <div style={mergedStyles}
      className={className}
    >
      {props.children}
    </div>
  );
};


class Rodal extends React.Component<Props, State> {
  el: HTMLDivElement | null = null;


  static defaultProps: DefaultProps;


  state = {
    isShow: false,
    animationType: 'leave'
  };


  componentDidMount() {
    if (this.props.visible) {
      this.enter();
    }
  }


  componentDidUpdate(prevProps: Props) {
    if (this.props.visible && !prevProps.visible) {
      this.enter();
    }

    if (!this.props.visible && prevProps.visible) {
      this.leave();
    }
  }


  enter() {
    this.setState({
      isShow: true,
      animationType: 'enter'
    });
  }


  leave() {
    if (IS_IE_9) {
      this.setState({
        isShow: false
      });

    } else {
      this.setState({
        animationType: 'leave'
      });
    }
  }


  onKeyUp = (event: React.KeyboardEvent) => {
    if (!this.props.closeOnEsc || event.keyCode !== 27) {
      return;
    }

    this.props.onClose(event);
  };


  animationEnd = (event: React.BaseSyntheticEvent) => {
    const { animationType } = this.state;
    const { closeOnEsc, onAnimationEnd } = this.props;

    if (animationType === 'leave') {
      this.setState({ isShow: false });

    } else if (closeOnEsc) {
      this.el?.focus();
    }

    if (event.target === this.el && onAnimationEnd) {
      onAnimationEnd();
    }
  };


  render() {
    const {
      closeMaskOnClick,
      onClose,
      customMaskStyles,
      showMask,
      duration,
      className,
      children,
      customStyles,
      showCloseButton,
      popupClass
    } = this.props;

    const CloseButton = showCloseButton ? <span className="rodal-close"
      onClick={onClose}
    /> : null;

    const { isShow, animationType } = this.state;

    const Mask = showMask ? (
      <div
        className="rodal-mask"
        style={customMaskStyles}
        onClick={closeMaskOnClick ? onClose : void 0}
      />
    ) : null;

    const style = {
      display: isShow ? '' : 'none',
      animationDuration: duration + 'ms',
      WebkitAnimationDuration: duration + 'ms'
    };

    return (
      <div
        style={style}
        className={cn('rodal', `rodal-fade-${animationType}`, className)}
        onAnimationEnd={this.animationEnd}
        tabIndex={-1}
        ref={
          el => {
            this.el = el;
          }
        }
        onKeyUp={this.onKeyUp}
      >
        {Mask}
        <Dialog {...this.props}
          animationType={animationType}
        >
          <div className={`child-wrapper ${popupClass}`}
            style={{ ...customStyles }}
          >
            {children}
            {CloseButton}
          </div>
        </Dialog>
      </div>
    );
  }
}


Rodal.defaultProps = {
  width: 400,
  height: 240,
  measure: 'px',
  visible: false,
  showMask: true,
  closeOnEsc: false,
  closeMaskOnClick: true,
  showCloseButton: true,
  animation: 'zoom',
  enterAnimation: '',
  leaveAnimation: '',
  onAnimationEnd: () => { },
  duration: 300,
  className: '',
  customStyles: {},
  customMaskStyles: {}
} as DefaultProps;


type DialogProps = {
  animation: string;
  animationType: string;
  enterAnimation: string;
  leaveAnimation: string;
  width: number;
  height: number;
  measure: string;
  duration: number;
  children: React.ReactNode;
}


type State = {
  isShow: boolean;
  animationType: string;
}


type DefaultProps = {
  width: number;
  height: number;
  measure: string;
  visible: boolean;
  showMask: boolean;
  closeOnEsc: boolean;
  closeMaskOnClick: boolean;
  showCloseButton: boolean;
  animation: string;
  enterAnimation: string;
  leaveAnimation: string;
  onAnimationEnd: () => void;
  duration: number;
  className: string;
  customStyles: React.CSSProperties;
  customMaskStyles: React.CSSProperties;
}


type RequiredProps = {
  onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
  popupClass: string;
}


type Props = DefaultProps & RequiredProps;

export default Rodal;
