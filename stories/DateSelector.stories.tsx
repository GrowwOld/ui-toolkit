import React from 'react';
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import { DateSelector } from '../src/components/atoms';
import { Props as DateSelectorProps } from '../src/components/atoms/DateSelector/DateSelector';

export default {
  title: 'DateSelector',
  component: DateSelector,
  argTypes: {
    defaultDate: {
      control: {
        type: 'select',
        options: [...Array(30).keys()].map(item => item + 1)
      }
    },
  }
};


const Template: Story<DateSelectorProps> = (args) => <DateSelector {...args} />;

export const TOOLTIP = Template.bind({});
TOOLTIP.args = {
  invokeMode: "POPUP",
  defaultDate: 5,
  onDateChange: action('onDateChange'),
  visible: true,
};

export const POPUP = Template.bind({});
POPUP.args = {
  ...TOOLTIP.args,
  invokeMode: "TOOLTIP",
};
