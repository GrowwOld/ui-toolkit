import React from 'react';


const Dialog = (props: Props) => {
  const animation =
    (props.animationType === 'enter'
      ? props.enterAnimation
      : props.leaveAnimation) || props.animation;


  const className = `rodal-dialog rodal-${animation}-${props.animationType}`;

  const { width, height, duration, customStyles } = props;

  const style = {
    width: width,
    height: height,
    animationDuration: duration + 'ms',
    WebkitAnimationDuration: duration + 'ms'
    // borderTopLeftRadius: '7px',
    // borderTopRightRadius: '7px'
  };

  const mergedStyles = { ...style, ...customStyles };

  return (
    <div style={mergedStyles}
      className={className}
    >
      {props.children}
    </div>
  );
};


type Props = {
  animation: string;
  animationType: string;
  enterAnimation: string;
  leaveAnimation: string;
  width: number | string;
  height: number | string;
  duration: number;
  children: React.ReactNode;
  customStyles: React.CSSProperties;
}

export default Dialog;
