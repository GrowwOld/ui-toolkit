import React from 'react';

import { Story } from '@storybook/react';

import { Tag } from '../src/components/atoms/Tag';
import { Props as TagProps } from '../src/components/atoms/Tag/Tag';

export default {
  title: 'Tag',
  component: Tag
};


const Template: Story<TagProps> = (args) => <Tag {...args}>
  <div className="absolute-center">
    0 shares are available to sell
  </div>
</Tag>;


export const Warning = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  isWarning: false,
  isError: true,
  isInfo: false
};
