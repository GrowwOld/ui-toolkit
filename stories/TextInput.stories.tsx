import React from 'react';

import { Story } from '@storybook/react';

import { Cancel, Visibility } from '@groww-tech/icon-store/mi';
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

export const Exclusive = Template.bind({});
Exclusive.args = {
  label: 'Email',
  placeholder: 'Enter Email',
  type: 'exclusive'
};


export const ExclusiveDisabled = Template.bind({});
ExclusiveDisabled.args = {
  label: 'Email',
  placeholder: 'Email',
  type: 'exclusive',
  disabled: true
};

export const ExclusiveError = Template.bind({});
ExclusiveError.args = {
  label: 'Email',
  error: 'There\'s an error',
  value: 'type something',
  type: 'exclusive'
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  placeholder: 'Enter Password',
  type: 'password',
  TrailingVis: () => <> <Visibility size={18} /></>

};

export const Clearable = Template.bind({});
Clearable.args = {
  label: 'Email',
  TrailingVis: () => <Cancel size={18} />
};

export const NoLabel = Template.bind({
  label: '',
  placeholder: 'No Label'
});
