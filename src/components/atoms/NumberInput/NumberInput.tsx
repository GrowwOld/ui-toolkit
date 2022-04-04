import React from 'react';
import { NumberInputStepper } from './NumberInputStepper';
import BaseNumberInput from './BaseNumberInput';


const NumberInput = (props:NumberInputProps) => {
  const { showSteper } = props;

  if (showSteper) {
    return <NumberInputStepper {...props} />;
  }

  return <BaseNumberInput {...props} />;
};


export type NumberInputProps = {
  min: number;
  max: number;
  step: number;
  value: string;
  onChange: React.FormEventHandler<HTMLInputElement>;
  variant: 'warning' | 'error' | 'default';
  showSteper?: boolean;
  disableSpecialCharacters?: boolean;
  disabled: boolean;
  disableDecimal?: boolean;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  LeadingVis: () => React.ReactNode;
  TrailingVis: () => React.ReactNode;
};

export default NumberInput;
