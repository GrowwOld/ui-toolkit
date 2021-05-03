import React from 'react';
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import { Button, MI_ICON_LIST } from '../src/components/atoms';
import { Props as ButtonProps } from '../src/components/atoms/Button/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    buttonType: {
      control: {
        type: 'select',
        options: [
          "Primary",
          "Secondary",
          "Tertiary"
        ]
      }
    },
    showLoader: {
      control: {
        type: 'select',
        options: [
          true, false
        ]
      }
    },
    loadingText: {
      control: "text"
    }
  }
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonText: "BUTTON",
  onClick: action('onButtonClick')
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  buttonType: "Secondary"
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  isDisabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  loadingText: "LOADING",
  showLoader: true
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Primary.args,
  width: "100%"
};

export const Custom = Template.bind({});
Custom.args = {
  ...Primary.args,
  buttonText: 'CHOOSE DATE',
  height: 50,
  width: 260,
  iconName: MI_ICON_LIST.check,
  textColor: 'var(--constantWhite)',
  backgroundColor: 'var(--growwRed)'
};
