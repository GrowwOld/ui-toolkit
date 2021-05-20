import React from 'react';
import { Story } from "@storybook/react";

import { ProgressBar } from '../src/components/atoms';
import { Props as ProgressBarProps } from '../src/components/atoms/ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar
};


export const Template: Story<ProgressBarProps> = (args) => {
  return (
    <div style={{margin: 24}}>
      <ProgressBar completedValue={30} {...args} />
    </div>
  );
}

Template.args = {
  name: "Demo ProgressBar",
  color: "var(--secondaryClr)",
  fillerThickness: 10,
  size: 420
}
