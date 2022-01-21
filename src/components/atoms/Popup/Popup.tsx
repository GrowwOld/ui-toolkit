import React from 'react';

import Rodal from './Rodal/Rodal';

export const RESPONSIVE_POPUP_STYLES = {
  display: 'block',
  background: 'var(--primaryBg)',
  borderTopLeftRadius: '7px',
  borderTopRightRadius: '7px',
  marginBottom: '0px',
  width: '100%',
  height: 'fit-content',
  padding: 15
};

class Popup extends React.PureComponent<Props> {
  static defaultProps: DefaultProps;


  constructor(props: Props) {
    super(props);
    if (props.onLoad) {
      props.onLoad();
    }
  }


  componentWillUnmount() {
    if (this.props.onUnLoad) {
      this.props.onUnLoad();
    }
  }


  render() {

    const {
      visible,
      width,
      height,
      customStyles,
      closeMaskOnClick,
      closeOnEsc,
      showCloseButton,
      children,
      popupClass,
      animation
    } = this.props;

    return (
      <Rodal
        visible={visible}
        onClose={this.onClose}
        width={width}
        height={height}
        customStyles={customStyles}
        closeMaskOnClick={closeMaskOnClick}
        closeOnEsc={closeOnEsc}
        showCloseButton={showCloseButton}
        popupClass={popupClass}
        animation={animation}
      >
        {children}
      </Rodal>
    );
  }


  onClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }
}


Popup.defaultProps = {
  width: 400,
  closeMaskOnClick: true,
  closeOnEsc: true,
  customStyles: {},
  animation: 'zoom',
  showCloseButton: true,
  popupClass: 'popup-border',
  onLoad: () => { },
  onUnLoad: () => { },
  onClose: () => { }
} as DefaultProps;


type DefaultProps = {
  width: number | string;
  height?: number | string;
  animation?: 'fade' | 'zoom' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'slideUp' | 'rotate' | 'door';
  onLoad: () => void;
  onUnLoad: () => void;
  onClose: () => void;
  closeMaskOnClick: boolean;
  closeOnEsc: boolean;
  showCloseButton: boolean;
  customStyles: React.CSSProperties;
  popupClass: string;
}


type RequiredProps = {
  visible: boolean;
}

export type Props = RequiredProps & DefaultProps;
export default Popup;
