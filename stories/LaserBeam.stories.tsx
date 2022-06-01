import React from 'react';

import { Story } from '@storybook/react';

import { LaserBeam } from '../src/components/atoms';
import { Props as LaserBeamProps, LASER_BEAM_UI } from '../src/components/atoms/LaserBeam/LaserBeam';

export default {
  title: 'Laser Beam',
  component: LaserBeam
};


const Template: Story<LaserBeamProps> = (args) => <LaserBeam {...args} />;


export const Dashed = Template.bind({});
Dashed.args = {
  ccStyle: LASER_BEAM_UI.DASH,
  show: false
};

export const Spread = Template.bind({});
Spread.args = {
  ccStyle: LASER_BEAM_UI.SPREAD,
  show: false
};
