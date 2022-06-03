import React from 'react';

import { Story } from '@storybook/react';

import { Ticker } from '../src/components/atoms';
import { Props as TickerProps } from '../src/components/atoms/Ticker/Ticker';

export default {
  title: 'Ticker',
  component: Ticker
};


const Template: Story<TickerProps> = (args) => {
  const [ currentState, setCurrentState ] = React.useState({
    price: '₹74128.91',
    class: 'primaryClr'
  });


  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentState(prevState => {
        if (prevState.price === '₹74128.91') {
          return {
            price: '₹56981.19',
            class: 'clrRed'
          };

        } else {
          return {
            price: '₹74128.91',
            class: 'primaryClr'
          };
        }
      });
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className='fs24'>
      Wipro
      </div>
      <div className='valign-wrapper width100'
        style={{ columnGap: '20px' }}
      >
        <Ticker
          {...args}
          textClassName='fs28 fw500'
          text={currentState.price}
          currentClassName='clrText'
          hiddenClassName={currentState.class}
        />

        <span className='fs14'>
          <span className={currentState.class}>
            {currentState.price === '₹56981.19' ? '-17147.72 (3.7%)' : '17147.72 (3.7%)'}
          </span>
          &nbsp;&nbsp;1D
        </span>
      </div>
    </>
  );
};


export const Default = Template.bind({});
