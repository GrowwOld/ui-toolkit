
import { Visibility, VisibilityOff } from '@groww-tech/icon-store/mi';
import React, { useState } from 'react';
import BaseTextInputV1 from './BaseTextInputV1';
import { TextInputProps } from './TextInputV1';


const PasswordTextInputV1 = (props: TextInputProps) => {
  const { type } = props;
  const [ typeState, _setTypeState ] = useState(type);


  const setType = () => {
    if (typeState === 'password') {
      _setTypeState('text');

    } else {
      _setTypeState('password');
    }
  };

  return (
    <BaseTextInputV1
      {...props}
      type={typeState}
      TrailingVis={() => PasswordTrailingVisual({ type: typeState, setType })}
    />
  );
};


const PasswordTrailingVisual = ({ type, setType }:{type:string | undefined; setType:()=>void}) => {

  if (type === 'password') {
    return (
      <Visibility
        onClick={setType}
        size={18}
      />
    );
  }

  return (
    <VisibilityOff
      onClick={setType}
      size={18}
    />
  );
};

export default PasswordTextInputV1;
