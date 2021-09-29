import React from 'react';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Accordion } from '../src/components/atoms';
import { Props as AccordionProps } from '../src/components/atoms/Accordion/Accordion';

import './style.css';

export default {
  title: 'Accordion',
  component: Accordion
};


const Template: Story<AccordionProps> = (args) => {
  return (
    <Accordion {...args}>
      <div className="accordion_content_class">
        Accordion Content
      </div>
    </Accordion>
  );
};

export const AccordionArgs = Template.bind({});
AccordionArgs.args = {
  title: 'Click To Expand',
  titleClass: 'clrText fw500 fs15',
  iconClass: '',
  parentClass: 'accordion_parent_class',
  onMountOpen: false,
  showRightIcon: true,
  onToggleCallback: action('toogleCalled')
};
