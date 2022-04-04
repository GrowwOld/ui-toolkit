import React from 'react';

import { Story } from '@storybook/react';

import { Cancel } from '@groww-tech/icon-store/mi';
import TextInput from '../src/components/atoms/TextInputV1/TextInputV1';
import { TextInputProps } from '../src/components/atoms/TextInputV1/TextInputV1';


export default {
  title: 'TextInput',
  component: TextInput
};


const Template: Story<TextInputProps> = (args) => {
  const [ value, setValue ] = React.useState('');


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <TextInput
      {...args}
      value={value}
      onChange={onChange}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Email',
  placeholder: 'Enter Email',
  variant: 'default'
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
  value: 'type something',
  placeholder: 'Enter Email'
};

export const Exclusive = Template.bind({});
Exclusive.args = {
  label: 'Email',
  placeholder: 'Enter Email',
  variant: 'exclusive'
};


export const ExclusiveDisabled = Template.bind({});
ExclusiveDisabled.args = {
  label: 'Email',
  placeholder: 'Email',
  variant: 'exclusive',
  disabled: true
};

export const ExclusiveError = Template.bind({});
ExclusiveError.args = {
  label: 'Email',
  error: 'There\'s an error',
  value: 'type something',
  variant: 'exclusive'
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  placeholder: 'Enter Password',
  type: 'password'

};

export const Clearable = Template.bind({});
Clearable.args = {
  label: 'Email',
  clearable: true
};

export const NoLabel = Template.bind({
  label: '',
  placeholder: 'No Label'
});

export const CalculatorsWithCustomLabel = Template.bind({});
CalculatorsWithCustomLabel.decorators = [
  (Story) => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        className='fs16 clrSubText'
        style={{ marginBottom: '8px' }}
      >Shares to buy NSE</div>
      <Story />
    </div>
  )
];

CalculatorsWithCustomLabel.args = {
  label: '',
  placeholder: 'Enter Email',
  TrailingVis: () => <> <Cancel size={18} /></>
};

export const EditPhoneNumber = Template.bind({});
EditPhoneNumber.args = {
  LeadingVis: () => (<span className='fs16'>+91 </span>),
  placeholder: '+91',
  disabled: true
};
