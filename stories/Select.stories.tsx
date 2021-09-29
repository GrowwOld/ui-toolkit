import React, { useState } from 'react';
import { Story } from '@storybook/react';

import { Select } from '../src/components/atoms';
import { Props as SelectProps } from '../src/components/atoms/Select/Select';

import './style.css';

export default {
  title: 'Select',
  component: Select
};

const RELATION_DATA = [
  { value: 'WIFE', label: 'Wife' },
  { value: 'HUSBAND', label: 'Husband' },
  { value: 'DAUGHTER', label: 'Daughter' },
  { value: 'SON', label: 'Son' },
  { value: 'BROTHER', label: 'Brother' },
  { value: 'SISTER', label: 'Sister' },
  { value: 'MOTHER', label: 'Mother' },
  { value: 'FATHER', label: 'Father' },
  { value: 'GRAND SON', label: 'Grand Son' },
  { value: 'GRAND DAUGHTER', label: 'Grand Daughter' }
];


const Template: Story<SelectProps> = ({ activeIndex, onSelectChange, ...args }) => {
  const [ selectedIndex, setSelectedIndex ] = useState(-1);

  return (
    <Select
      activeIndex={selectedIndex}
      onSelectChange={setSelectedIndex}
      {...args}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Select Relation',
  data: RELATION_DATA,
  activeOptionBoxClass: 'select_active_option_class',
  optionsParentClass: 'select_option_class'
};
