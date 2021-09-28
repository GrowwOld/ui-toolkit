import React from 'react';

import { ThumbUpAlt } from '@groww-tech/icon-store/mi';
import { ReactIconProps } from '@groww-tech/icon-store';

import { Story } from '@storybook/react';

import { InformationBox } from '../src/components/atoms';
import { Props as InformationBoxProps } from '../src/components/atoms/InformationBoard/InformationBox';

export default {
  title: 'InformationBox',
  component: InformationBox,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'DEFAULT',
          'POSITIVE',
          'NEUTRAL',
          'ERROR',
          'WARNING'
        ]
      }
    },
    showIcon: {
      control: {
        type: 'select',
        options: [
          true, false
        ]
      }
    },
    outlined: {
      control: 'select',
      options: [
        true, false
      ]
    },
    width: {
      control: 'number'
    },
    height: {
      control: 'number'
    }
  }
};


const Template: Story<InformationBoxProps> = (args) => <InformationBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  showIcon: true,
  width: 'auto',
  height: 'auto',
  outlined: false,
  type: 'NEUTRAL',
  informationBoxClass: '',
  informationBoxStyle: {
    color: 'var(--text)'
  },
  content: `This is a default informaton box. This can be used for anything,
   from a notice box to a notification box to anything you need it to be!!.
  Just kidding it\'s just a template text to fill up space. :P`
};


export const Positive = Template.bind({});
Positive.args = {
  ...Default.args,
  type: 'POSITIVE',
  iconComponent: (props: ReactIconProps) => <ThumbUpAlt
    {...props}
  />,
  content: 'This is a positive informaton box with custom icon'
};

export const Neutral = Template.bind({});
Neutral.args = {
  ...Default.args,
  type: 'NEUTRAL',
  content: 'This is a neutral informaton box'
};

export const Warning = Template.bind({});
Warning.args = {
  ...Default.args,
  type: 'WARNING',
  content: 'This is a warning informaton box'
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  type: 'ERROR',
  content: 'This is an error informaton box'
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Default.args,
  type: 'ERROR',
  outlined: true,
  content: 'This is an outlined informaton box'
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  ...Default.args,
  type: 'NEUTRAL',
  showIcon: false,
  content: 'This is an informaton box without an icon'
};

export const Custom = Template.bind({});
Custom.args = {
  ...Default.args,
  type: 'DEFAULT',
  informationBoxStyle: {
    background: 'var(--secondaryClr30)',
    fontSize: 16
  },
  width: 500,
  height: 120,
  showIcon: false,
  content: 'This is a custom informaton box'
};
