import React from 'react';
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import { Chip, MI_ICON_LIST } from '../src/components/atoms';
import { Props as ChipProps } from '../src/components/atoms/Chip/Chip';

import './style.css';

export default {
  title: 'Chip',
  component: Chip,
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        options: Object.keys(MI_ICON_LIST)
      }
    },
    iconPosition: {
      control: {
        type: 'select',
        options: ['left', 'right']
      }
    },
  }
}

const Template: Story<ChipProps> = (args) => (
  <Chip {...args} />
)

export const ChipArgs = Template.bind({});
ChipArgs.args = {
  text: "NFO",
  parentClass: "fs16",
  iconName: MI_ICON_LIST.cancel,
  iconClass: "chip_iconMargin",
  onClick: action('onChipClick'),
  iconPosition: 'right',
}
