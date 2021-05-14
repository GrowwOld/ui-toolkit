import React, { useState } from 'react';
import { Story } from "@storybook/react";

import { Popover, POPOVER_POSITIONS } from '../src/components/atoms';
import { Props as PopoverProps } from '../src/components/atoms/Popover/Popover';

export default {
  title: 'Popover',
  component: Popover
};


const Template: Story<PopoverProps> = ({ content, direction, ...args }) => {
  return (
    <Popover
      content={content}
      direction={direction}
    >
      <div className="absolute-center">
        Hover Me
      </div>
    </Popover>
  )
}

export const Right = Template.bind({});
Right.args = {
  content: POPOVER_POSITIONS.RIGHT,
  direction: POPOVER_POSITIONS.RIGHT,
}

export const Bottom = Template.bind({});
Bottom.args = {
  content: POPOVER_POSITIONS.BOTTOM,
  direction: POPOVER_POSITIONS.BOTTOM,
}
