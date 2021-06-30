import React from 'react';

import './checkBox.css';

export const CHECKBOX_DIRECTION = {
  LEFT: 'left',
  RIGHT: 'right'
};


const CheckBox = (props: Props) => {

  const {
    label, activeColor,
    inActiveColor, size,
    labelComponent, isChecked,
    handleOnClick, value,
    disabled, checkBoxDirection,
    addParentClass
  } = props;


  const checkBoxClick = () => {
    if (!disabled) {
      handleOnClick(value, !isChecked);
    }
  };

  const inactive_svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
    >
      <path
        fill="var(--primaryBg)"
        fill-rule="evenodd"
        stroke={inActiveColor}
        d="M2.564.5c-.737 0-1.017.054-1.305.208a1.317 1.317 0 0 0-.551.551C.554 1.547.5 1.827.5 2.564v8.872c0 .737.054 1.017.208 1.305.128.239.312.423.551.551.288.154.568.208 1.305.208h8.872c.737 0 1.017-.054 1.305-.208.239-.128.423-.312.551-.551.154-.288.208-.568.208-1.305V2.564c0-.737-.054-1.017-.208-1.305a1.317 1.317 0 0 0-.551-.551C12.453.554 12.173.5 11.436.5H2.564z"
      />
    </svg>
  );

  const active_svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
    >
      <g fill="none"
        fill-rule="evenodd"
      >
        <path
          fill="var(--primaryBg)"
          stroke={activeColor}
          d="M2.564.5c-.737 0-1.017.054-1.305.208a1.317 1.317 0 0 0-.551.551C.554 1.547.5 1.827.5 2.564v8.872c0 .737.054 1.017.208 1.305.128.239.312.423.551.551.288.154.568.208 1.305.208h8.872c.737 0 1.017-.054 1.305-.208.239-.128.423-.312.551-.551.154-.288.208-.568.208-1.305V2.564c0-.737-.054-1.017-.208-1.305a1.317 1.317 0 0 0-.551-.551C12.453.554 12.173.5 11.436.5H2.564z"
        />
        <path
          fill={activeColor}
          fill-rule="nonzero"
          d="M9.69 5.173a.591.591 0 1 1 .837.836L6.98 9.556a.591.591 0 0 1-.836 0l-1.97-1.97a.591.591 0 0 1 .835-.836l1.553 1.552L9.69 5.173z"
        />
      </g>
    </svg>
  );

  return (
    <div onClick={checkBoxClick}
      className={`c11AlignCenter c11Pointer ${addParentClass} ${checkBoxDirection === CHECKBOX_DIRECTION.RIGHT ? 'c11checkOnRight' : ''}`}
    >
      {isChecked ? active_svg : inactive_svg}
      {label && <div className="c11CLabel">{label}</div>}
      {labelComponent && labelComponent()}
    </div>
  );
};


type DefaultProps = {
  size: number;
  label: React.ReactNode;
  value: string;
  isChecked: boolean;
  disabled: boolean;
  activeColor: string;
  inActiveColor: string;
  addParentClass: string;
  labelComponent: () => React.ReactNode;
  checkBoxDirection: ValueOf<typeof CHECKBOX_DIRECTION>;
}


type RequiredProps = {
  handleOnClick: (value: string, isChecked: boolean) => void;
}

CheckBox.defaultProps = {
  size: 14,
  label: '',
  value: '',
  isChecked: false,
  disabled: false,
  addParentClass: '',
  activeColor: 'var(--secondaryClr)',
  inActiveColor: 'var(--text)',
  labelComponent: () => null,
  checkBoxDirection: CHECKBOX_DIRECTION.LEFT
} as DefaultProps;

export type Props = DefaultProps & RequiredProps;

export default CheckBox;
