import React from 'react';
import PropTypes from 'prop-types';
import { Backspace, Done } from '@groww-tech/icon-store/mi';

import { RippleEffect } from '../RippleEffect';

import { KEY_TYPES, NUMPAD_KEYS, NUMPAD_CONSTANTS } from './numpadConstants';

import './numpad.css';


const Numpad = (props:Props) => {

  const getNumpadKey = (item:NumpadKey) => {
    const ActionIcon = item.val === NUMPAD_CONSTANTS.LEFT_BOTTOM_BUTTON
      ? Backspace
      : Done;

    return (
      <RippleEffect
        addParentClass="numpad98Button"
        duration={500}
        id={`numpad98Id${item.val}`} //numpad98Iddone used to hide right bottom key in mf investment numpad.
        onClick={() => props.onButtonClick(item.val)}
      >
        {
          item.type === KEY_TYPES.NUM
            ? item.val
            : <ActionIcon />
        }
      </RippleEffect>
    );
  };

  return (
    <div className="row">
      <div className="col s12 numpad98Wrapper">
        <div className="col s4">
          {
            NUMPAD_KEYS[0].map(item => {
              return getNumpadKey(item);
            })
          }
        </div>
        <div className="col s4">
          {
            NUMPAD_KEYS[1].map(item => {
              return getNumpadKey(item);
            })
          }
        </div>
        <div className="col s4">
          {
            NUMPAD_KEYS[2].map(item => {
              return getNumpadKey(item);
            })
          }
        </div>
      </div>
    </div>
  );
};


type NumpadKey = {
  val?: string | number;
  type?: string;
}


Numpad.defaultProps = {
  onButtonClick: () => {}
};


type Props = {
  onButtonClick: (key?:string | number)=>void;
}


export { NUMPAD_CONSTANTS } from './numpadConstants';
export default Numpad;
