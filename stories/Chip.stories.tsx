import React from 'react';

import { Cancel } from 'beta-icon-store/mi';
import { FnoIcon } from 'beta-icon-store/custom';
import { ReactIconProps } from 'beta-icon-store';

import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import { Chip } from '../src/components/atoms';
import { Props as ChipProps } from '../src/components/atoms/Chip/Chip';

import './style.css';

export default {
  title: 'Chip',
  component: Chip,
  argTypes: {
    iconPosition: {
      control: {
        type: 'select',
        options: [ 'left', 'right' ]
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
