import React from 'react';

import { Story } from '@storybook/react';

import { Loader } from '../src/components/atoms';
import { DefaultProps as LoaderProps, LOADER_TYPE } from '../src/components/atoms/Loader/Loader';

export default {
  title: 'Loader',
  component: Loader
};


const Template: Story<LoaderProps> = (args) => <Loader {...args} />;


export const Circular = Template.bind({});
Circular.args = {
  loaderType: LOADER_TYPE.CIRCULAR
};

export const CircularBolt = Template.bind({});
CircularBolt.args = {
  loaderType: LOADER_TYPE.CIRCULAR_BOLT
};

export const CandleStick = Template.bind({});
CandleStick.args = {
  loaderType: LOADER_TYPE.CANDLE_STICK
};

export const Linear = Template.bind({});
Linear.args = {
  loaderType: LOADER_TYPE.LINEAR
};
