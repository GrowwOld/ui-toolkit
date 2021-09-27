import React from 'react';

import { ReactIconProps } from '@groww-tech/icon-store/types';
import Search from '@groww-tech/icon-store/mi/Search';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import { Button } from '../src/components/atoms';
import { Props as ButtonProps } from '../src/components/atoms/Button/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    buttonType: {
      control: {
        type: 'select',
        options: [
          'Primary',
          'Secondary',
          'Tertiary'
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
      control: 'text'
    }
  }
};


const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonText: 'BUTTON',
  onClick: action('onButtonClick')
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  buttonType: 'Secondary'
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  isDisabled: true
};

export const Loading = Template.bind({});
Loading.args = {
  ...Primary.args,
  loadingText: 'LOADING',
  showLoader: true
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Primary.args,
  width: '100%'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Primary.args,
  buttonText: 'SEARCH',
  iconPosition: 'Left',
  iconComponent: (iconProps: ReactIconProps) => (
    <Search
      {...iconProps}
      size={20}
    />
  )
};

export const Custom = Template.bind({});
Custom.args = {
  ...Primary.args,
  buttonText: 'CHOOSE DATE',
  height: 50,
  width: 260,
  textColor: 'var(--constantWhite)',
  backgroundColor: 'var(--growwRed)'
};
