import React from 'react';
import assign from 'object-assign';
import warning from './utils/warning';

const warningMessage = 'To ensure ReactLaserBeam work correctly. The initial prop "show" must be "false".';
export const LASER_BEAM_UI = {
  DASH: 'dash',
  SPREAD: 'spread'
}

class LaserBeam extends React.Component<Props, State> {
  public static defaultProps: Props = {
    show: false,
    width: '2px',
    background: 'var(--secondaryClr)',
    zIndex: '1200',
    noShadow: false,
    ccStyle: 'dash',
    addon: 'transparent',
    nextTransitionWidth: '100%',
    nextTransitionDuration: '1s',
    currentTransitionDuration: '400ms'
  }

  constructor(props: Props) {
    super(props);
    if (props.show === true) {
      warning(warningMessage);
    }

    this.state = {
      style: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        margin: props.ccStyle === 'dash' ? '' : '0 auto',
        zIndex: props.zIndex,
        width: '0',
        height: props.width,
        background: props.background,
        transition: 'all 0ms',
        boxShadow: props.noShadow ? 'none' : props.background + ' 0px 0px 10px'
      },
      addonStyle: {
        content: '',
        display: 'none',
        position: 'absolute',
        right: -parseInt(props.width) / 2 + 'px',
        width: props.width,
        height: props.width,
        background: props.addon,
        boxShadow: props.addon + ' 0 0 10px ' + (2 / parseInt(props.width) + 1) + 'px',
        borderRadius: '50%'
      }
    };
  }


  componentDidUpdate(prevProps: Props) {
    const { style, addonStyle } = this.state;
    const { show } = prevProps;
    const {
      show: nextShow,
      nextTransitionWidth,
      nextTransitionDuration,
      currentTransitionDuration
    } = this.props;

    let changedStyle, changedAddonStyle;

    if (show === nextShow) {
      return;
    }

    if (nextShow) {
      changedStyle = assign({}, style, {
        width: nextTransitionWidth,
        transitionProperty: 'width',
        transitionDuration: nextTransitionDuration,
        transitionTimingFunction: 'cubic-bezier(0, 1, 0.3, 1)'
      });

    } else {
      changedStyle = assign({}, style, {
        width: '100%',
        transitionProperty: 'width',
        transitionDuration: currentTransitionDuration,
        transitionTimingFunction: 'ease'
      });

    }

    changedAddonStyle = assign({}, addonStyle, {
      display: 'block'
    });

    this.setState({
      style: changedStyle,
      addonStyle: changedAddonStyle
    })
  }


  handleTransitionEnd() {
    const { style, addonStyle } = this.state;
    const { show } = this.props;
    let changedStyle, changedAddonStyle;

    if (!show) {
      changedStyle = assign({}, style, {
        width: '0',
        transition: 'width 0ms'
      });

      changedAddonStyle = assign({}, addonStyle, {
        display: 'none'
      });

      this.setState({
        style: changedStyle,
        addonStyle: changedAddonStyle
      });
    }
  }


  _renderAddon() {
    const { addonStyle } = this.state;
    const { ccStyle, width } = this.props;

    if (ccStyle === 'spread') {
      let rets = [];
      let changedAddonStyle;

      changedAddonStyle = assign({}, addonStyle, {
        left: -parseInt(width) / 2 + 'px',
        right: 0
      });

      rets.push(<div key="after" style={addonStyle}></div>);
      rets.push(<div key="before" style={changedAddonStyle}></div>);

      return rets;

    } else {
      return <div style={addonStyle}></div>;
    }
  }


  render() {
    const { style } = this.state;
    const { show, width, background, zIndex, noShadow, ccStyle, addon, ...props } = this.props;

    return (
      <div
        style={style}
        onTransitionEnd={this.handleTransitionEnd.bind(this)}
        {...props}
      >
        {this._renderAddon()}
      </div>
    );
  }
}

type Props = {
  show: boolean,
  width: string,
  background?: string,
  zIndex?: string,
  noShadow?: boolean,
  ccStyle?: ValueOf<typeof LASER_BEAM_UI>,
  addon?: string,
  nextTransitionWidth?: string,
  nextTransitionDuration?: string,
  currentTransitionDuration?: string
}

type State = {
  style: object,
  addonStyle: object
}

export default LaserBeam;
