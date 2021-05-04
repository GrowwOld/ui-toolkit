import React from 'react';

import { CheckBox, CheckBoxProps, CHECKBOX_DIRECTION } from '../../atoms/CheckBox';

import './checkBoxGroup.css';

export { CHECKBOX_DIRECTION } from '../../atoms/CheckBox';

const CheckBoxGroup = (props: Props) => {
  const { containerClassName, checkBoxes, checkedList, onCheck } = props;

  return (
    <div className={`cbg29ParentDiv ${containerClassName}`}>
      {checkBoxes.map((checkBox, index) => {
        return (
          <CheckBox
            key={`${checkBox.value}${index}`}
            size={checkBox?.size}
            label={checkBox?.label}
            value={checkBox?.value}
            isChecked={checkedList.indexOf(checkBox?.value) !== -1}
            disabled={checkBox?.disabled}
            addParentClass={checkBox?.addParentClass}
            activeColor={checkBox?.activeColor}
            inActiveColor={checkBox?.inActiveColor}
            labelComponent={checkBox?.labelComponent}
            checkBoxDirection={checkBox?.checkBoxDirection}
            handleOnClick={onCheck}
          />
        )
      })}
    </div>
  )
}


const defaultProps: DefaultProps = {
  containerClassName: ""
}


type DefaultProps = {
  containerClassName: string;
}


type RequiredProps = {
  checkBoxes: CheckBox[];
  checkedList: string[];
  onCheck: (value: string, isChecked: boolean) => void;
}

type CheckBox = {
  size?: number,
  label?: React.ReactNode,
  value: string,
  disabled?: boolean,
  activeColor?: string,
  inActiveColor?: string,
  addParentClass?: string
  labelComponent?: () => React.ReactNode,
  checkBoxDirection?: ValueOf<typeof CHECKBOX_DIRECTION>,
}

CheckBoxGroup.defaultProps = defaultProps;


export type Props = DefaultProps & RequiredProps;

export default React.memo(CheckBoxGroup);
