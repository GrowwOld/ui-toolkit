import React from 'react';

import Cancel from '@groww-tech/icon-store/mi/Cancel';
import FnoIcon from '@groww-tech/icon-store/custom/FnoIcon';
import { ReactIconProps } from '@groww-tech/icon-store/types';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import {
  Chip,
  MI_ICON_LIST
} from '../src/components/atoms';
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
    }
  }
};


const Template: Story<ChipProps> = (args) => (
  <Chip {...args} />
);

export const Text = Template.bind({});
Text.args = {
  text: 'NFO',
  parentClass: 'fs16',
  onClick: action('onChipClick')
};

export const WithMaterialIcon = Template.bind({});
WithMaterialIcon.args = {
  ...Text.args,
  iconPosition: 'right',
  iconComponent: (iconProps: ReactIconProps) => (
    <Cancel {...iconProps} />
  )
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  ...Text.args,
  text: 'IPO',
  textClass: 'fs14 fw500',
  iconPosition: 'right',
  iconComponent: (iconProps: ReactIconProps) => (
    <FnoIcon
      {...iconProps}
      size={18}
    />
  )
};
