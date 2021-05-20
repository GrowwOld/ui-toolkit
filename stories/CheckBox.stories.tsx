import React from 'react';
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import { CheckBox } from '../src/components/atoms';
import { Props as CheckBoxProps } from '../src/components/atoms/CheckBox/CheckBox';

export default {
  title: 'CheckBox',
  component: CheckBox,
  argTypes: {
    isChecked: {
      control: {
        type: 'select',
        options: [
          true, false
        ]
      }
    },
    checkBoxDirection: {
      control: {
        type: 'select',
        options: [
          "left",
          "right"
        ]
      }
    },
    label: {
      control: "text"
    }
  }
};

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const Checked = Template.bind({});
Checked.args = {
  label: "Check Actions",
  isChecked: true,
  handleOnClick: action('onCheckBoxClick')
}


export const Unchecked = Template.bind({});
Unchecked.args = {
  label: "Check Actions",
  isChecked: false,
  handleOnClick: action('onCheckBoxClick')
}

export const OnRight = Template.bind({});
OnRight.args = {
  label: <span style={{ marginRight: '8px'}}>Checkbox</span>,
  isChecked: true,
  checkBoxDirection: "right",
  handleOnClick: action('onCheckBoxClick')
}
