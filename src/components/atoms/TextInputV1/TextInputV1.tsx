import React from 'react';

import BaseTextInputV1 from './BaseTextInputV1';
import PasswordTextInputV1 from './PaswordTextInputV1';
import ClerableTextInputV1 from './ClerableTextInputV1';


//The Following component is used to manage different variants implemented
const TextInputV1 = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { type, clearable } = props;

  if (type === 'password') {
    return <PasswordTextInputV1
      {...props}
      ref={ref}
    />;
  }

  if (clearable) {
    return <ClerableTextInputV1
      ref={ref}
      {...props}
    />;
  }

  return <BaseTextInputV1
    {...props}
    ref={ref}
  />;
});


export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> &
_TextInputProps;


type _TextInputProps = {
  disabled?: boolean;
  error?: string | boolean;
  SuffixComponent?: () => React.ReactNode;
  PrefixComponent?: () => React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
  label?: string;
  variant?: 'default' | 'exclusive'| 'unstyled';
  onChange: React.FormEventHandler<HTMLInputElement>;
  clearable?: boolean;
};

export default TextInputV1;
