import React from 'react';

import { IconStore, MI_ICON_LIST } from '../IconStore';
import AnimateHeight from '../AnimateHeight';

import './accordion.css';

class Accordion extends React.PureComponent<AccordionProps, AccordionState> {

  state = {
    isOpen: this.props.onMountOpen,
  };


  toggleState = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }), () => {
      this.props.onToggleCallback(this.state.isOpen);
    });
  }


  render() {
    const { isOpen } = this.state;
    const {
      title,
      children,
      parentClass,
      headerClass,
      iconClass,
      titleClass,
      showRightIcon
    } = this.props;

    return (
      <div className={`cur-po ${parentClass}`}>
        <div className={`valign-wrapper vspace-between acc11HeaderMain ${headerClass}`} onClick={this.toggleState}>
          <div className={`acc11Title ${titleClass}`}>{title}</div>

          {
            showRightIcon ?
              <IconStore
                iconName={!isOpen ? MI_ICON_LIST.keyboard_arrow_down : MI_ICON_LIST.keyboard_arrow_up}
                iconClass={`acc1Icon ${iconClass}`}
                width={20}
                height={20}
              />
              : null
          }
        </div>
        <div>
          <AnimateHeight duration={300} height={isOpen ? "auto" : 0}>
            {children}
          </AnimateHeight>
        </div>
      </div>
    );
  }


  public static defaultProps: DefaultProps = {
    parentClass: '',
    onMountOpen: true,
    titleClass: '',
    headerClass: '',
    iconClass: '',
    onToggleCallback: () => { },
    showRightIcon: true
  };
}


type RequiredProps = {
  title: string | React.ReactNode;
}


type DefaultProps = {
  parentClass: string;
  headerClass: string;
  iconClass: string;
  titleClass: string;
  /**Initial state of accordion that you want to keep i.e true(open) or false(closed)*/
  onMountOpen: boolean;
  /**If you want to show the right arrow icon or not*/
  showRightIcon: boolean;
  onToggleCallback: (e: boolean) => void
}


type AccordionProps = RequiredProps & DefaultProps;


type AccordionState = {
  isOpen: boolean
}

export default Accordion;
