import React, { useState } from 'react';

import { IconStore, MI_ICON_LIST } from '../IconStore';
import AnimateHeight from '../AnimateHeight';

import './accordion.css';


const Accordion = (props: Props) => {

  const [ isOpen, setAccordionToggle ] = useState(props.onMountOpen);


  const toggleState = () => {
    setAccordionToggle(!isOpen);
    props.onToggleCallback(isOpen);
  };

  const {
    title,
    children,
    parentClass,
    headerClass,
    iconClass,
    titleClass,
    showRightIcon
  } = props;

  return (
    <div className={`cur-po ${parentClass}`}>
      <div className={`valign-wrapper vspace-between acc11HeaderMain ${headerClass}`}
        onClick={toggleState}
      >
        <div className={`acc11Title ${titleClass}`}>{title}</div>
        {
          showRightIcon
            ? <IconStore
              iconName={!isOpen ? MI_ICON_LIST.keyboard_arrow_down : MI_ICON_LIST.keyboard_arrow_up}
              iconClass={`acc1Icon ${iconClass}`}
              width={20}
              height={20}
              fontSize={20}
            />
            : null
        }
      </div>
      <div>
        <AnimateHeight duration={300}
          height={isOpen ? 'auto' : 0}
        >
          {children}
        </AnimateHeight>
      </div>
    </div>
  );
};

export type Props = RequiredProps & DefaultProps;


type RequiredProps = {
  children: React.ReactNode;
}


type DefaultProps = {
  title: React.ReactNode;
  /**Initial state of accordion that you want to keep i.e true(open) or false(closed)*/
  onMountOpen: boolean;
  /**If you want to show the right arrow icon or not*/
  showRightIcon: boolean;
  onToggleCallback: (isOpen: boolean) => void;
  parentClass: string;
  headerClass: string;
  iconClass: string;
  titleClass: string;
}


Accordion.defaultProps = {
  parentClass: '',
  headerClass: '',
  iconClass: '',
  titleClass: '',
  onToggleCallback: () => { },
  title: '',
  onMountOpen: true,
  showRightIcon: true
} as DefaultProps;


export default React.memo(Accordion);
