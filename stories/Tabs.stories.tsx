import React, { useState } from 'react';
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import { Tabs, TabsProps } from '../src/components/atoms';

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {
  }
};

const Template: Story<TabsProps> = (args) => <Tabs {...args} />

export const Default = Template.bind({});

const WALLETS_TABS = [
  {
    width: 168,
    left: 10,
    name: (
      <div style={{ padding: "10px 60px" }} className="fw500">
        DEPOSIT
      </div>
    )
  },
  {
    width: 208,
    left: 180,
    name: (
      <div style={{ padding: "10px 60px" }} className="fw500">
        WITHDRAW
      </div>
    )
  }
]

Default.args = {
  data: WALLETS_TABS,
  showBottomBorder: true,
  customStyleTab: "",
  onSelect: () => { }
}

