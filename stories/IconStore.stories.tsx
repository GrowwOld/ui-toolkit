import React from 'react';
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import { IconStore, MI_ICON_LIST, IMG_ICON_LIST } from '../src/components/atoms';
import { Props as IconStoreProps } from '../src/components/atoms/IconStore/IconStore';

export default {
  title: 'IconStore',
  component: IconStore,
  argTypes: {
    iconName: {
      control: {
        type: 'select',
        options: Object.keys(MI_ICON_LIST)
      }
    }
  }
};

const Template: Story<IconStoreProps> = (args) => {
  return <IconStore {...args} />;
}

export const Icon = Template.bind({});
Icon.args = {
  iconName: MI_ICON_LIST.calendar_today,
  onIconClick: action('MiIconClicked')
}

export const ImageIcon = Template.bind({});
ImageIcon.args = {
  getImage: true,
  useLazyLoad: false,
  width: 40,
  height: 40,
  iconName: IMG_ICON_LIST.withdraw_success,
  onIconClick: action('ImageIconClicked')
}
