import React, { useState, useEffect, useRef, useCallback } from 'react';

import { KeyboardArrowDown } from '@groww-tech/icon-store/mi';

import AnimateHeight from '../AnimateHeight';

import './accordion.css';


const Accordion = (props: Props) => {
  const {
    onMountOpen,
    onToggleCallback,
    title,
    children,
    parentClass,
    headerClass,
    iconClass,
    titleClass,
    showRightIcon,
    useAnimateHeight,
    maxHeight
  } = props;

  const [isOpen, toggleAccordion] = useState(onMountOpen);

  const childRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);


  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (onToggleCallback) {
      onToggleCallback(isOpen);
    }
  }, [isOpen]);


  const toggleState = useCallback(() => {
    toggleAccordion(isOpen => !isOpen);
  }, []);


  const childClass = isOpen ? 'ac11Show' : 'ac11Hidden';

  let childStyle = {};

  let newIconClass = 'ac11Icon absolute-center ' + iconClass;

  if (isOpen) {
    newIconClass += ' ac11collapsibleOpen';
    childStyle = { maxHeight: maxHeight ?? childRef?.current?.scrollHeight };

  } else {
    newIconClass += ' ac11collapsibleClose';

  }


  const getAnimateHeightUI = () => (
    <div>
      <AnimateHeight duration={300}
        height={isOpen ? 'auto' : 0}
      >
        {children}
      </AnimateHeight>
    </div>
  );


  return (
    <div className={`cur-po ${parentClass}`}>
      <div className={`valign-wrapper vspace-between ac11HeaderMain ${headerClass}`}
        onClick={toggleState}
      >
        <h3 className={`ac11Title ${titleClass}`}>{title}</h3>

        {
          showRightIcon
            ? <KeyboardArrowDown
              className={newIconClass}
              size={20}
            />
            : null
        }
      </div>

      {
        useAnimateHeight ? getAnimateHeightUI()
          : <div className={childClass}
            style={childStyle}
            ref={childRef}
          >
            {children}
          </div>
      }
    </div>
  );
};


export type Props = RequiredProps & OptionalProps & DefaultProps


type RequiredProps = {
  children: React.ReactNode;
  title: string | React.ReactNode;
}


type OptionalProps = {
  onToggleCallback?: ((isOpen: boolean) => void);
  maxHeight?: string | number;
}


type DefaultProps = {
  onMountOpen: boolean;
  showRightIcon: boolean;
  parentClass: string;
  headerClass: string;
  iconClass: string;
  titleClass: string;
  useAnimateHeight: boolean;
}

const defaultProps = {
  onMountOpen: true,
  showRightIcon: true,
  parentClass: '',
  headerClass: '',
  iconClass: '',
  titleClass: '',
  useAnimateHeight: false
};


Accordion.defaultProps = defaultProps as DefaultProps;

export default React.memo(Accordion);
