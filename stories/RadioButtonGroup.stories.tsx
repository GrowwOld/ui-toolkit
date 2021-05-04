import React, { useState } from 'react';
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import { RadioButtonGroup, RadioButtonGroupProps, RADIO_DIRECTION } from '../src/components/molecules';

export default {
  title: 'RadioButtonGroup',
  component: RadioButtonGroup,
  argTypes: {
  }
};

const Template: Story<RadioButtonGroupProps> = (args) => {
  const [value, setValue] = useState("");
  console.log(value);

  return (
    <div className="valign-wrapper">
      <RadioButtonGroup {...args} selected={value} onSelect={setValue} />
    </div>
  )
};

export const Default = Template.bind({});

const genderArray = [
  { label: "Male", value: "MALE" },
  { label: "Female", value: 'FEMALE', parentClassName: "bas11RadioParent" },
  { label: "Other", value: "NA", parentClassName: "bas11RadioParent" }
];

Default.args = {
  // id: "gender",
  containerClassName: "",
  radioButtons: genderArray,
};

export const Custom = Template.bind({});

const switchArray = [
  { label: "On", value: "ON", radioDirection: RADIO_DIRECTION.RIGHT },
  { label: "Off", value: 'OFF', parentClassName: "bas11RadioParent" }
];

Custom.args = {
  radioButtons: switchArray,
}
