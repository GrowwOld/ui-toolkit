import React from 'react';

import { Story } from '@storybook/react';

import TextInput from '../src/components/atoms/TextInputV1';
import { TextInputProps } from '../src/components/atoms/TextInputV1';


export default {
  title: 'TextInput',
  component: TextInput
};


const Template: Story<TextInputProps> = (args) => <TextInput {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Email',
  placeholder: 'Enter Email'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Email',
  placeholder: 'Enter Email',
  disabled: true
};

export const Error = Template.bind({});
Error.args = {
  label: 'Email',
  error: 'There\'s an error',
  value: 'type something'
};
