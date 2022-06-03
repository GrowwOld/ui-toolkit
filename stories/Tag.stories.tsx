import React from 'react';

import { Story } from '@storybook/react';

import { Tag } from '../src/components/atoms';
import { Props as TagProps } from '../src/components/atoms/Tag/Tag';

export default {
  title: 'Tag',
  component: Tag
};

const tagText = '0 shares are available to sell';


const Template: Story<TagProps> = (args) => <Tag {...args}>
  <div className="absolute-center">
    {tagText}
  </div>
</Tag>;


export const Warning = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  isWarning: false,
  isError: true,
  isInfo: false
};

export const Info = Template.bind({});
Info.args = {
  isWarning: false,
  isError: false,
  isInfo: true
};
