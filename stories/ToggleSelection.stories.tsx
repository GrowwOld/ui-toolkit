import React from 'react';

import { Story } from '@storybook/react';

import { ToggleSelection } from '../src/components/atoms';
import { Props as ToggleSelectionProps } from '../src/components/atoms/ToggleSelection/ToggleSelection';

export default {
  title: 'ToggleSelection',
  component: ToggleSelection
};


const Template: Story<ToggleSelectionProps> = (args) => {
  const [ isActive, setIsActive ] = React.useState(true);


  const alterActive = (_val: boolean) => {
    setIsActive(!isActive);
  };

  return <ToggleSelection
    {...args}
    isActive={isActive}
    onChange={alterActive}
  />;
};

export const Default = Template.bind({});
Default.args = {
  parentClass: 'cur-po'
};
