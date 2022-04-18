import React from 'react';

import { NumberInputProps } from './NumberInput';

import { Container, Input } from './styles';


const BaseNumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>((props, ref) => {
  const {
    SuffixComponent = null,
    PrefixComponent = null,
    value = 0,
    onChange,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
    step = 1,
    allowSpecialCharacters = false,
    disableDecimal = false,
    onKeyDown = () => {},
    variant = 'default'
  } = props;

  const numberValue = Number(value);


  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };


  const _onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const preventSpecialChar = (allowSpecialCharacters && [ '+', '-', 'e' ].includes(e.key));
    const preventDecimal = disableDecimal && [ '.' ].includes(e.key);

    if (preventSpecialChar || preventDecimal) {
      e.preventDefault();
    }


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

      // @ts-ignore : to prevent onChange re writing as it can be passed by user
      //we are synthentically generating custome event to set value
      onChange({ target: { value: floorValue } });
    }
  };


  const onDecrement = () => {
    if (min <= numberValue - step) {
      const increasedVal = numberValue - step; //this one increases above next value, so floor it
      const floorValue = Math.floor(increasedVal / step) * step;

      // @ts-ignore : to prevent onChange re writing as it can be passed by user
      //we are synthentically generating custome event to set value
      onChange({ target: { value: floorValue } });
    }
  };

  return (
    <Container {...props}>
      {PrefixComponent && <span>{PrefixComponent()} </span>}
      <Input
        className="fs18 fw500"
        max={max}
        min={min}
        {...props}
        onKeyDown={_onKeyDown}
        onChange={_onChange}
        type="number"
        ref={ref}
      />
      {SuffixComponent && <span>{SuffixComponent()}</span>}
    </Container>
  );
});

export default BaseNumberInput;
