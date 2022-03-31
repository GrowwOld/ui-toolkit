import React from 'react';
import { NumberInputStepper } from './NumberInputStepper';
import { Container, Input } from './styles';


const NumberInput = (props:NumberInputProps) => {
  const { showSteper } = props;

  if (showSteper) {
    return <NumberInputStepper {...props} />;
  }

  return <BaseNumberInput {...props} />;
};


export const BaseNumberInput = (props: NumberInputProps) => {
  const {
    TrailingVis,
    LeadingVis,
    value,
    onChange,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
    step = 1,
    disableSpecialCharacters,
    disableDecimal,
    onKeyDown
  } = props;

  const numberValue = Number(value);


  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (numberValue >= min && numberValue <= max) {
    onChange(e);
    // }
  };


  const _onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disableSpecialCharacters && [ '+', '-', 'e' ].includes(e.key)) {
      e.preventDefault();
    }

    if (disableDecimal && [ '.' ].includes(e.key)) {
      e.preventDefault();
    }

    //detect down arrow key
    if (e.key === 'ArrowDown') {
      onDecrement();
    }

    if (e.key === 'ArrowUp') {
      onIncrement();
    }

    onKeyDown(e);
  };


  const onIncrement = () => {
    if (max >= numberValue + step) {
      const increasedVal = numberValue + step; //this one increases above next value, so floor it
      const floorValue = Math.floor(increasedVal / step) * step;

      // @ts-ignore
      onChange({ target: { value: floorValue } });
    }
  };


  const onDecrement = () => {
    if (min <= numberValue - step) {
      const increasedVal = numberValue - step; //this one increases above next value, so floor it
      const floorValue = Math.floor(increasedVal / step) * step;

      // @ts-ignore
      onChange({ target: { value: floorValue } });
    }
  };

  return (
    <Container {...props}>
      {LeadingVis && <span>{LeadingVis()} </span>}
      <Input
        className="fs18 fw500"
        {...props}
        onKeyDown={_onKeyDown}
        onChange={onChange}
        type="number"
      />
      {TrailingVis && <span>{TrailingVis()}</span>}
    </Container>
  );
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
