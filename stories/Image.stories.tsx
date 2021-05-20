import React from 'react';
import { Story } from "@storybook/react";

import { Image } from '../src/components/atoms';
import { Props as ImageProps } from '../src/components/atoms/Image/Image';

export default {
  title: 'Image',
  component: Image
};

const Template: Story<ImageProps> = (args) => {
  return <div>
    <p>Random Image</p>
    <Image {...args} />
  </div>;
}

export const Icon = Template.bind({});
Icon.args = {
  src: "https://source.unsplash.com/random",
  alt: "random img",
  width: '400',
  height: 300,
  useLazyLoad: false
}
