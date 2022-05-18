
import React from 'react';

import { Story } from '@storybook/react';

import { NumberInput } from '../src/components/atoms';
import { NumberInputProps } from '../src/components/atoms/NumberInput/NumberInput';


export default {
  title: 'NumberInput',
  component: NumberInput
};


const Template: Story<NumberInputProps> = (args) => {
  const [ value, setValue ] = React.useState('100');


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <NumberInput
        {...args}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 0
};

export const Warning = Template.bind({});
Warning.args = {
  value: 100,
  variant: 'warning'
};


export const Error = Template.bind({});
Error.args = {
  value: 100,
  variant: 'error'
};

export const Unstyled = Template.bind({});
Unstyled.args = {
  placeholder: 0,
  value: 100,
  variant: 'unstyled'
};

export const UnstyledLarge = Template.bind({});
UnstyledLarge.args = {
  placeholder: 0,
  value: 100,
  variant: 'unstyled',
  size: 'large'
};

export const DisabledSpecialChar = Template.bind({});
DisabledSpecialChar.args = {
  value: 100,
  allowSpecialCharacters: true
};

export const DisableDecimal = Template.bind({});
DisableDecimal.args = {
  value: 100,
  disableDecimal: true
};

export const RupeeSymbol = Template.bind({});
RupeeSymbol.args = {
  value: 100,
  PrefixComponent: () => <span>₹</span>
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 100,
  variant: 'disabled',
  SuffixComponent: () => <span> %</span>
};

export const StepperControls = Template.bind({});
StepperControls.args = {
  value: 100,
  showSteper: true
};

export const StepValue = Template.bind({});
StepValue.args = {
  value: 100,
  step: 5
};

export const MinimumValue = Template.bind({});
MinimumValue.args = {
  value: 100,
  min: 99,
  step: 5
};

export const MaxValue = Template.bind({});
MaxValue.args = {
  value: 100,
  max: 105
};
