import React from 'react';
import cn from "classnames";

import { IconStore, MI_ICON_LIST } from '../IconStore';

import './radioButton.css';

export const RADIO_DIRECTION = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

const RadioButton = (props: Props) => {

  const {
    label,
    selected,
    onSelect,
    labelClassName,
    parentClassName,
    iconClassName,
    radioDirection
  } = props;

  const labelParentClassName = cn({
    "clrText fs15 radioLs2": true,
    [`${labelClassName}`]: true,
    "radioCo11LabelRight": radioDirection === RADIO_DIRECTION.RIGHT,
    "radioCo11LabelLeft": radioDirection === RADIO_DIRECTION.LEFT
  });

  return (
    <div
      onClick={onSelect}
      className={`radioCo11Box ${parentClassName} ${radioDirection === RADIO_DIRECTION.RIGHT ? 'radioCo11BoxReverse' : ''}`}
    >
      <IconStore
        iconName={selected ? MI_ICON_LIST.radio_button_checked : MI_ICON_LIST.radio_button_unchecked}
        iconClass={`radioCo11Icon ${iconClassName}`}
      />
      <div className={labelParentClassName}>
        {label}
      </div>
    </div>
  );
}


const defaultProps: DefaultProps = {
  iconClassName: '',
  labelClassName: '',
  parentClassName: 'bas11RadioParent',
  radioDirection: RADIO_DIRECTION.LEFT
}


type DefaultProps = {
  labelClassName: string,
  parentClassName: string,
  radioDirection: string,
  iconClassName: string;
}


type RequiredProps = {
  value?: React.ReactNode,
  label: React.ReactNode,
  selected: boolean,
  onSelect: () => void,
}


RadioButton.defaultProps = defaultProps

export type Props = RequiredProps & DefaultProps;

export default React.memo(RadioButton);
