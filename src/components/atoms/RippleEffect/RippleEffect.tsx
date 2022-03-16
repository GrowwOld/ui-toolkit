import React, { useState } from 'react';

import './rippleEffect.css';

const rippleInitialStyle = {
  opacity: 0,
  transform: 'translate(-50%, -50%)'
};


const RippleEffect = (props:Props) => {
  const {
    color,
    duration,
    id,
    onClick,
    delayOnClick,
    delayOnClickDuration,
    addParentClass,
    children
  } = props;

  const [ rippleStyle, setRippleStyle ] = useState(rippleInitialStyle);

  const elementId = String(id);


  const handleClick = (event: React.MouseEvent) => {
    const elementWidth = document.getElementById(elementId)?.offsetWidth || 0;
    const elementHeight = document.getElementById(elementId)?.offsetHeight || 0;
    const top = elementHeight / 2;
    const left = elementWidth / 2;

    const startingRippleStyle = {
      top,
      left,
      transform: 'translate(-50%, -50%)',
      opacity: 1,
      backgroundColor: color
    };

    // ripple effect starts
    setRippleStyle(startingRippleStyle);

    setTimeout(() => {
      const size = Math.max(elementWidth, elementHeight);

      const finalRippleStyle = {
        left,
        top,
        transform: `${'translate(-50%, -50%)'} scale(${size / 9})`,
        opacity: 0,
        transition: `all ${duration}ms`
      };

      // ripple effect ends
      setRippleStyle(finalRippleStyle);
    }, 10);

    if (delayOnClick) {
      setTimeout(() => {
        onClick();
      }, delayOnClickDuration);

    } else {
      onClick();
    }
  };

  return (
    <div
      id={elementId}
      className={`rip100ParentWrapper ${addParentClass}`}
      onClick={handleClick}
    >
      {children}
      <span className="rip100StaticStyle"
        style={rippleStyle}
      />
    </div>
  );

};

RippleEffect.defaultProps = {
  color: 'var(--rippleNormal)',
  duration: 500,
  id: 'rippleDiv',
  addParentClass: '',
  onClick: () => { },
  delayOnClick: false,
  delayOnClickDuration: 250
};


type DefaultProps = {
  color: string;
  duration: number;
  id: string | number;
  addParentClass: string;
  onClick: Function;
  delayOnClick: boolean; // If true, onClick will be called after 200ms so Ripple is visible and feedback is better
  delayOnClickDuration: number;
};


type RequiredProps = {
  children: React.ReactNode;
}


type Props = RequiredProps & DefaultProps;

export default RippleEffect;
