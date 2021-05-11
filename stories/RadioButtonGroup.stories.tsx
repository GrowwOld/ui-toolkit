import React, { useState } from 'react';
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import { Props as RadioButtonGroupProps } from '../src/components/molecules/RadioButtonGroup/RadioButtonGroup';
import { RadioButtonGroup } from '../src/components/molecules';
import { RADIO_DIRECTION } from '../src/components/atoms';

export default {
  title: 'RadioButtonGroup',
  component: RadioButtonGroup,
};

const Template: Story<RadioButtonGroupProps> = (args) => {
  const [value, setValue] = useState("");

  const onSelect = (newValue) => {
    if (newValue === value) {
      setValue("");

    } else {
      setValue(newValue);

    }
  }

  return (
    <div className="valign-wrapper">
      <RadioButtonGroup {...args} selected={value} onSelect={onSelect} />
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
