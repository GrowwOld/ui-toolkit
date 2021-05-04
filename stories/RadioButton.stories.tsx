import React from 'react';
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import { RadioButton, RadioButtonProps, RADIO_DIRECTION } from '../src/components/atoms';

export default {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    radioDirection: {
      control: {
        type: 'radio',
        options: [RADIO_DIRECTION.LEFT, RADIO_DIRECTION.RIGHT]
      }
    }
  }
};

const Template: Story<RadioButtonProps> = (args) => {
  const [selected, setSelected] = React.useState(false);

  const onSelect = () => {
    setSelected(!selected);
    return action('On Select');
  }

  return <RadioButton {...args} selected={selected} onSelect={onSelect} />
};

export const Default = Template.bind({});
Default.args = {
  labelClassName: '',
  parentClassName: '',
  radioDirection: RADIO_DIRECTION.LEFT,
  label: "Radio Button Label"
};

export const OnRight = Template.bind({});
OnRight.args = {
  ...Default.args,
  label: <span>Radio Button</span>,
  radioDirection: RADIO_DIRECTION.RIGHT
}
