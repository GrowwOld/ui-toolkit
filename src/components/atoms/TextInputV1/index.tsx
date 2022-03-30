import { Cancel, Visibility, VisibilityOff } from '@groww-tech/icon-store/mi';
import { Value } from 'classnames';
import React, { useState } from 'react';
import { PrimaryInput, Label, ErrorLabel, Container, TrailingVisContainer, LeadingVisContainer, WrapperContainer } from './styles';
import { BaseTextInputV1 } from './BaseTextInput';
import { PasswordTextInputV1 } from './Pasword';
import { ClerableTextInput } from './Clerable';


const TextInputV1 = (props: TextInputProps) => {
  const { type, clearable } = props;

  if (type === 'password') {
    return <PasswordTextInputV1 {...props}/>;
  }

  if (clearable) {
    return (
      <ClerableTextInput {...props}/>
    );
  }

  return <BaseTextInputV1 {...props}/>;
};


export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> &
_TextInputProps;


type _TextInputProps = {
  disabled?: boolean;
  error?: string | boolean;
  required?: boolean;
  LeadingVis: () => React.ReactNode;
  TrailingVis: () => React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
  label: string;
  variant?: 'shortText' | 'exclusive';
  onChange: React.FormEventHandler<HTMLInputElement>;
  clearable: boolean;
};


// const computeStyles = classNames('textInput', {
//   ['textInput--error']: error
// });


// const TextInput = (props: InputProps) => {
//   const { error } = props;

//   // return <TextInputV1RenderProps render={( disabled, error, required, leadingVis, TrailingVis, ...rest )=>( <Input />) />
//   return (
//     <TextInputV1RenderProps
//       {...props}
//       render={
//         (props) => (<PrimaryInput
//           {...props}
//           error={error ? true : false}
//         />)
//       }
//     />
//   );
//   // return (
//   //   <Input
//   //     disabled={disabled}
//   //     {...rest}
//   //   />
//   // )
// };


export default TextInputV1;
