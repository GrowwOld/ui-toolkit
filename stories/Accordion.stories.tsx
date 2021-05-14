import React from 'react';
import { Story } from "@storybook/react";

import { Accordion } from '../src/components/atoms';
import AccordionProps from '../src/components/atoms/Accordion/Accordion';


export default {
  title: 'Accordion',
  component: Accordion
};

const Template: Story<AccordionProps> = (args) => {
  return <div>
    <p>Accordion Example</p>
    <Accordion {...args} />
  </div>;
}

export const AccordionArgs = Template.bind({});
AccordionArgs.args = {
  title: <div className="clrText fw500 fs15">Click To Expand</div>
}
