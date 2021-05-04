import React from 'react';

import './toggleSwitch.css'

const ToggleSwitch = (props: Props) => {
  const {
    switchCircleColor, activeBackgroundColor, width,
    inactiveBackgroundColor, onChange, height,
    isActive, leftText, rightText
  } = props;

  // circleDiameter is the diameter of the circular slider which should be smaller than the size of the parent component so as to provide offset between the slider and it's parent
  const circleDiameter = height - 4;

  const switchLabelStyle = {
    background: isActive ? activeBackgroundColor : inactiveBackgroundColor,
    width,
    height,
    borderRadius: height,
    top: '0px', // required here, as somewhere in the project(globally) these values are altered
    left: '0px' // required here
  }
  const switchDivStyle = {
    width,
    height
  }
  const inputStyle = {
    margin: '0px' // required here, as somewhere in the project(globally) these values are altered
  }

  const switchButtonStyle = {
    background: switchCircleColor,
    width: `${circleDiameter}px`,
    height: `${circleDiameter}px`,
    transform: isActive ? `translateX(${width - circleDiameter - 4}px)` : 'none'
  }

  return (
    <div className="valign-wrapper">
      {leftText}
      <div style={switchDivStyle} className='sw348reactSwitchDivision' onClick={(e) => onChange(e)}>
        <input
          style={inputStyle}
          checked={isActive}
          onChange={(e) => onChange(e)}
          className="sw348reactSwitchCheckbox"
          id="reactSwitchId"
          type="checkbox"
        />
        <div
          style={switchLabelStyle}
          className="sw348reactSwitchLabel"
        // for="reactSwitchId"
        >
          <div style={switchButtonStyle} className={`sw348reactSwitchButton`} />
        </div>
      </div>
      {rightText}
    </div>
  )

}


const defaultProps: DefaultProps = {
  width: 52,
  height: 24,
  leftText: '',
  rightText: '',
  inactiveBackgroundColor: 'var(--subText)',
  switchCircleColor: 'var(--constantWhite)',
  activeBackgroundColor: 'var(--primaryClr)'
}


type RequiredProps = {
  isActive: boolean;
  onChange: Function;
}


type DefaultProps = {
  width: number;
  height: number;
  switchCircleColor: string;
  activeBackgroundColor: string;
  leftText: JSX.Element | string;
  rightText: JSX.Element | string;
  inactiveBackgroundColor: string;
}


ToggleSwitch.defaultProps = defaultProps;

export type Props = RequiredProps & DefaultProps;

export default React.memo(ToggleSwitch);
