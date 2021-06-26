import React, { useState } from "react";
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  IconStore
} from "../src/components/atoms";
import { Props as DropdownProps } from "../src/components/atoms/Dropdown/Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
  },
};

const Template: Story<DropdownProps> = (args) => {
  return (
    <Dropdown
      {...args}
    >
      <DropdownTrigger>
        <span className="fs21 story_dropdown_trigger">Domains
          <IconStore
            iconName="keyboard_arrow_down"
          />
        </span>
      </DropdownTrigger>
      <DropdownContent>
        <div className="story_card">
          <div>Finance</div>
          <div>Marketing</div>
          <div>Engineering</div>
        </div>
      </DropdownContent>
    </Dropdown>
  );
};

export const Default = Template.bind({});
Default.args = {
  onHide: action('onHide'),
  onShow: action('onShow')
}

export const DropdownIconAnimation = (args) => {
  const [iconOrientation, setIconOrientation] = useState('up')
  return (
    <Dropdown
      {...args}
      onShow={() => { setIconOrientation('down') }}
      onHide={() => { setIconOrientation('up') }}
    >
      <DropdownTrigger>
        <span className="fs21 story_dropdown_trigger">Domains
          <IconStore
            iconName="keyboard_arrow_down"
            iconClass={`story_dropdown_icon story_dropdown_icon_${iconOrientation}`}
          />
        </span>
      </DropdownTrigger>
      <DropdownContent>
        <div className="story_card">
          <div>Finance</div>
          <div>Marketing</div>
          <div>Engineering</div>
        </div>
      </DropdownContent>
    </Dropdown>
  );
};

DropdownIconAnimation.parameters = {
  docs: {
    source: {
      code: `
      const [iconOrientation, setIconOrientation] = useState('up')

  return (
    <Dropdown
      {...args}
      onShow={() => { setIconOrientation('down') }}
      onHide={() => { setIconOrientation('up') }}
    >
      <DropdownTrigger>
        <span className="fs21 story_dropdown_trigger">Domains
          <IconStore
            iconName="keyboard_arrow_down"
            iconClass={"story_dropdown_icon story_dropdown_icon_<iconOrientation>"}
          />
        </span>
      </DropdownTrigger>
      <DropdownContent>
        <div className="story_card">
          <div>Finance</div>
          <div>Marketing</div>
          <div>Engineering</div>
        </div>
      </DropdownContent>
    </Dropdown>
  );
      `,
    },
  },
};
