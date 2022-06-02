import React from 'react';

import { Story } from '@storybook/react';

import { GoBack } from '../src/components/atoms';
import { Props as GoBackProps } from '../src/components/atoms/GoBack/GoBack';

export default {
  title: 'Go Back',
  component: GoBack
};

const CustomGoBack = (
  <div className='fs14'>
    Back
  </div>
);


const Template: Story<GoBackProps> = (args) => <GoBack {...args} />;


export const Default = Template.bind({});

export const Custom = Template.bind({});
Custom.args = {
  text: CustomGoBack,
  iconWidth: 20,
  iconHeight: 20
};
