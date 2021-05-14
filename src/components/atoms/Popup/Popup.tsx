import React from 'react';

import Rodal from './Rodal/Rodal';

class Popup extends React.PureComponent<Props>{
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
      customStyles,
      closeMaskOnClick,
      closeOnEsc,
      showCloseButton,
      children,
      popupClass
    } = this.props;

    return (
      <Rodal
        visible={visible}
        onClose={this.onClose}
        width={width}
        customStyles={customStyles}
        closeMaskOnClick={closeMaskOnClick}
        closeOnEsc={closeOnEsc}
        showCloseButton={showCloseButton}
        popupClass={popupClass}
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
  onLoad: () => { },
  onUnLoad: () => { },
  onClose: () => { },
  closeMaskOnClick: true,
  closeOnEsc: true,
  showCloseButton: true,
  customStyles: {},
  popupClass: ''
} as DefaultProps;

type DefaultProps = {
  width: number,
  onLoad: () => void,
  onUnLoad: () => void,
  onClose: () => void,
  closeMaskOnClick: boolean,
  closeOnEsc: boolean,
  showCloseButton: boolean
  customStyles: React.CSSProperties,
  popupClass: string
}

type RequiredProps = {
  visible: boolean
}

export type Props = RequiredProps & DefaultProps;
export default Popup;
