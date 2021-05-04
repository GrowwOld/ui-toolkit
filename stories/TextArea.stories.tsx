import React from 'react';
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import { TextArea, TextAreaProps } from '../src/components/atoms';

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    disabled: {
      default: false,
      control: {
        type: 'select',
        options: [
          true, false
        ]
      }
    },
    showError: {
      control: {
        type: 'select',
        options: [
          true, false
        ]
      }
    },
    label: {
      control: "text"
    },
    disableCopyPaste: {
      type: 'select',
      options: [
        true, false
      ]
    }
  }
};

const Template: Story<TextAreaProps> = (args) => {
  const [value, setValue] = React.useState('');

  // for two way binding, since TextArea is a controlled component
  const onChange = (e: any) => {
    const newValue = e.target.value;

    setValue(newValue);
  }

  return <TextArea {...args} value={value} onChange={onChange} />
};

export const Basic = Template.bind({});
Basic.args = {
  id: "textarea",
  rows: 5,
  cols: 10,
  disabled: false,
  labelStyle: {},
  errorStyle: {},
  showError: false,
  textAreaStyle: {},
  parentDivClass: "",
  disableCopyPaste: false,
  error: "there's an error",
  placeholder: "start typing here",

  onEnterPress: (e: any) => action('OnenterPress'),
  onBackspace: (e: any) => action('onBackspace'),
  onFocus: (e: any) => action('onFocus'),
  onKeyDown: (e: any) => action('onKeyDown'),
  onKeyPress: (e: any) => action('onKeyPress')
}


export const Disabled = Template.bind({});
Disabled.args = {
  ...Basic.args,
  label: "Text Area Disabled",
  disabled: true
}

export const Error = Template.bind({});
Error.args = {
  ...Basic.args,
  label: "label",
  showError: true,
  error: "Oops!! some error occured"
}

export const Custom = Template.bind({});
Custom.args = {
  ...Basic.args,
  label: "Custom Text Area Label",
  rows: 10,
  cols: 25,
  labelStyle: {
    color: "green"
  },
  textAreaStyle: {
    border: "2px solid green"
  }
}
