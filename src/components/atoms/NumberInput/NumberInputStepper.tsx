import { Add, Remove } from '@groww-tech/icon-store/mi';
import React from 'react';
import { NumberInputProps } from './NumberInput';

import BaseNumberInput from './BaseNumberInput';

export const NumberInputStepper = (props:NumberInputProps) => {
  return (
    <BaseNumberInput
      {...props}
      LeadingVis={() => StepLeadingVis(props)}
      TrailingVis={() => StepTrailingVis(props)}
    />
  );
};


const StepTrailingVis = ({ step = 1, max = Number.POSITIVE_INFINITY, value, onChange }:NumberInputProps) => {
  const numberValue = Number(value);


  const onClick = () => {
    if (max >= numberValue + step) {
      const increasedVal = numberValue + step; //this one increases above next value, so floor it
      const floorValue = Math.floor(increasedVal / step) * step;

      // @ts-ignore
      onChange({ target: { value: floorValue } });
    }
  };

  return (
    <Add
      size={28}
      className="cur-po"
      onClick={onClick}
    />
  );

};


const StepLeadingVis = ({ step = 1, min = Number.NEGATIVE_INFINITY, value, onChange }: NumberInputProps) => {

  const numberValue = Number(value);


  const onClick = () => {

    if (min <= numberValue - step) {
      const increasedVal = numberValue - step; //this one increases above next value, so floor it
      const floorValue = Math.floor(increasedVal / step) * step;

      // @ts-ignore
      onChange({ target: { value: floorValue } });
    }
  };

  return (
    <Remove
      size={28}
      className="cur-po"
      onClick={onClick}
    />
  );
};
