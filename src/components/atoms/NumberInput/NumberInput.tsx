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

export type NumberInputProps = React.InputHTMLAttributes<HTMLInputElement> &
_NumberInputProps;

export type _NumberInputProps = {
  min?: number;
  max?: number;
  step?: number;
  onChange: React.FormEventHandler<HTMLInputElement>;
  value: string | number;
  variant?: 'warning' | 'error' | 'default';
  showSteper?: boolean;
  allowSpecialCharacters?: boolean;
  disabled?: boolean;
  disableDecimal?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  PrefixComponent?: () => React.ReactNode;
  SuffixComponent?: () => React.ReactNode;
};

export default NumberInput;
