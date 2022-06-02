import React from 'react';

import { Story } from '@storybook/react';

import { CogoToastify as Toast, Button } from '../src/components/atoms';

export default {
  title: 'Toast',
  component: Toast
};


const Template : Story = (_args) => {
  const activateToast = (type: string) => {
    switch (type) {
      case 'sucess':
        return Toast.success({
          subText: 'Toast Sucess'
        });

      case 'warn':
        return Toast.warn({
          subText: 'Toast Warn'
        });

      case 'error':
        return Toast.error({
          subText: 'Toast error'
        });

      case 'info':
        return Toast.info({
          subText: 'Toast info'
        });

      case 'loading':
        return Toast.loading({
          subText: 'Toast Loading'
        });

      default:
        return;
    }
  };

  return (
    <div className='valign-wrapper width100'
      style={{ columnGap: '20px' }}
    >
      <Button
        buttonText="Toast Sucess"
        onClick={() => activateToast('sucess')}
      />

      <Button
        backgroundColor="var(--growwYellow)"
        buttonText="Toast Warn"
        onClick={() => activateToast('warn')}
      />

      <Button
        backgroundColor="var(--growwRed)"
        buttonText="Toast Error"
        onClick={() => activateToast('error')}
      />

      <Button
        buttonText="Toast Info"
        buttonType="Secondary"
        onClick={() => activateToast('info')}
      />

      <Button
        backgroundColor="var(--secondaryClr)"
        buttonText="Toast Loading"
        onClick={() => activateToast('loading')}
      />
    </div>
  );
};

export const Default = Template.bind({});
