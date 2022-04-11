import React, { useState } from 'react';

import BaseTextInputV1 from './BaseTextInputV1';
import { TextInputProps } from './TextInputV1';

import { Visibility, VisibilityOff } from '@groww-tech/icon-store/mi';


const PasswordTextInputV1 = React.forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
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
      ref={ref}
      type={typeState}
      SuffixComponent={() => PasswordTrailingVisual({ type: typeState, setType })}
    />
  );
});


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
