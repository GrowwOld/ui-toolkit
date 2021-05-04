import React from 'react';

import { IconStore, MI_ICON_LIST } from '../IconStore';

import './radioButton.css';

export const RADIO_DIRECTION = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

const RadioButton = (props: any) => {

  const {
    label,
    selected,
    onSelect,
    labelClassName,
    parentClassName,
    iconClassName,
    radioDirection
  } = props;

  return (
    <div
      onClick={() => onSelect()}
      className={`radioCo11Box ${parentClassName} ${radioDirection === RADIO_DIRECTION.RIGHT ? 'radioCo11BoxReverse' : ''}`}
    >
      <IconStore
        iconName={selected ? MI_ICON_LIST.radio_button_checked : MI_ICON_LIST.radio_button_unchecked}
        iconClass={`radioCo11Icon ${iconClassName}`}
      />
      <div className={`clrText fs15 radioLs2 ${labelClassName} ${radioDirection === RADIO_DIRECTION.RIGHT ? 'radioCo11LabelLeft' : 'radioCo11LabelRight'}`}>
        {label}
      </div>
    </div>
  );
}


const defaultProps: DefaultProps = {
  labelClassName: '',
  parentClassName: '',
  radioDirection: RADIO_DIRECTION.LEFT
}


type DefaultProps = {
  labelClassName: '',
  parentClassName: '',
  radioDirection: string
}


type RequiredProps = {
  label: JSX.Element | string,
  selected: boolean,
  onSelect: Function,
}


RadioButton.defaultProps = defaultProps

export type Props = RequiredProps & DefaultProps;

export default React.memo(RadioButton);
