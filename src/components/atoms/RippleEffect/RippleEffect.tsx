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


  const handleClick = (event: React.MouseEvent) => {
    const wid = document.getElementById(id)?.offsetWidth || 0;
    const hei = document.getElementById(id)?.offsetHeight || 0;
    const top = hei / 2;
    const left = wid / 2;

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
      const size = Math.max(wid, hei);

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
      id={id}
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
  id: string;
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
