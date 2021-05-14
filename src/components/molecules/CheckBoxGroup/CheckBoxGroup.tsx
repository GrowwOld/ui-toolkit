import React from 'react';

import { CheckBox, CHECKBOX_DIRECTION } from '../../atoms/CheckBox';

import './checkBoxGroup.css';

const CheckBoxGroup = (props: Props) => {
  const { containerClassName, checkBoxes, checkedList, onCheck } = props;

  return (
    <div className={`cbg29ParentDiv ${containerClassName}`}>
      {checkBoxes.map((checkBox: CheckBox, index) => {
        return (
          <CheckBox
            key={`${checkBox.value}${index}`}
            isChecked={checkedList.indexOf(checkBox?.value || '') !== -1}
            handleOnClick={onCheck}
            {...checkBox}
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
  onCheck: (value?: string, isChecked?: boolean) => void;
}

type CheckBox = {
  size?: number;
  label?: React.ReactNode;
  value?: string;
  disabled?: boolean;
  activeColor?: string;
  inActiveColor?: string;
  addParentClass?: string;
  labelComponent?: () => React.ReactNode;
  checkBoxDirection?: ValueOf<typeof CHECKBOX_DIRECTION>;
}

CheckBoxGroup.defaultProps = defaultProps;

export type Props = DefaultProps & RequiredProps;

export { CHECKBOX_DIRECTION } from '../../atoms/CheckBox';

export default React.memo(CheckBoxGroup);
