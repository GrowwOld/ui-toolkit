import React, { useState } from 'react';
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import { Button, Popup } from '../src/components/atoms';
import { Props as PopupProps } from '../src/components/atoms/Popup/Popup';

export default {
  title: 'Popup',
  component: Popup
};


const Template: Story<PopupProps> = ({ visible, onClose, ...args }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Button
        buttonText="Open Popup"
        onClick={() => setToggle(true)}
      />
      <Popup
        visible={toggle}
        onClose={() => setToggle(false)}
        {...args}
      >
        <div className="absolute-center" style={{minHeight: 64}}>
          Some Random Content
        </div>
      </Popup>
    </>
  )
}

export const Basic = Template.bind({});
Basic.args = {
  width: 360,
  closeOnEsc: action('onEscClick'),
  closeMaskOnClick: action('onMaskClick'),
  showCloseButton: true
}
