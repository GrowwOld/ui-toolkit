import React from 'react';
import ReactDOM from 'react-dom';
import { getData } from '../../../../utils/helper';

import ToastContainer from './components/ToastContainer';
import Toast from './components/Toast';

import './cogoToast.css';

let ctToastCount = 0;


const cogoToast = (options:Options) => {
  let rootContainer = document.getElementById(getData(options, 'toastContainerID', null) || 'ct-container');

  if (!options.position) {
    options.position = 'top-right';
  }

  if (!rootContainer) {
    rootContainer = document.createElement('div');
    rootContainer.id = 'ct-container';
    document.body.appendChild(rootContainer);
  }

  ctToastCount += 1;

  const hideTime = (options?.hideAfter === undefined ? 3 : options.hideAfter) * 1000;
  const toast = { id: ctToastCount, ...options };

  ReactDOM.render(<ToastContainer toast={toast} />, rootContainer);


  const hide = () => {
    ReactDOM.render(<ToastContainer hiddenID={toast.id} />, rootContainer);
  };

  const completePromise:any = new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, hideTime);
  });

  completePromise.hide = hide;

  return completePromise;
};

cogoToast.success = (options:Options) => cogoToast({ ...options, type: 'success' });
cogoToast.warn = (options:Options) => cogoToast({ ...options, type: 'warn' });
cogoToast.info = (options:Options) => cogoToast({ ...options, type: 'info' });
cogoToast.error = (options:Options) => cogoToast({ ...options, type: 'error' });
cogoToast.loading = (options:Options) => cogoToast({ ...options, type: 'loading' });


type Options = {
  position?: string;
  type?: 'success' | 'warn' | 'error' | 'info' | 'loading';
  hideAfter?: number;
  subText?: string;
  title?: string;
}

export { Toast };

export default cogoToast;
