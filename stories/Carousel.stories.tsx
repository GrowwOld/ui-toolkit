import React from 'react';
import { Story } from "@storybook/react";
import { action } from '@storybook/addon-actions';

import { Carousel } from '../src/components/molecules';
import { Settings } from '../src/types/components/molecules/Carousel/index'

export default {
  title: 'Carousel',
  component: Carousel,
  argTypes: {
  }
};

const Template: Story<Settings> = (args) => <Carousel {...args} >
    <span style={{ marginRight: '87px' }}>React</span>
    <span style={{ marginRight: '87px' }}>Hello</span>
    <span style={{ marginRight: '87px' }}>Hello</span>
    <span style={{ marginRight: '87px' }}>Hello</span>

</Carousel>;


const skillsArray = [
  <span style={{ marginRight: '87px' }}>React</span>,
  <span style={{ marginRight: '87px' }}>Angular</span>,
  <span style={{ marginRight: '87px' }}>Vue</span>,
  <span style={{ marginRight: '87px' }}>Selvete</span>,
]

export const OneSlide = Template.bind({});
OneSlide.args = {
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  arrows: false,
  swipeToSlide: true,
  infinite: false,
  initialSlide: 0,
  childrens: skillsArray
};


export const Doted = Template.bind({})
Doted.args={
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  arrows: true,
  swipeToSlide: true,
  infinite: false,
  initialSlide: 0
};



