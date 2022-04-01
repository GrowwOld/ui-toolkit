import React from 'react';

import BaseTextInputV1 from './BaseTextInputV1';
import PasswordTextInputV1 from './PaswordTextInputV1';
import ClerableTextInputV1 from './ClerableTextInputV1';


//The Following component is used to manage different variants implemented
const TextInputV1 = (props: TextInputProps) => {
  const { type, clearable } = props;

  if (type === 'password') {
    return <PasswordTextInputV1 {...props}/>;
  }

  if (clearable) {
    return (
      <ClerableTextInputV1 {...props}/>
    );
  }

  return <BaseTextInputV1 {...props}/>;
};


export type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> &
_TextInputProps;


type _TextInputProps = {
  disabled?: boolean;
  error?: string | boolean;
  LeadingVis?: () => React.ReactNode;
  TrailingVis?: () => React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
  label: string;
  variant?: 'shortText' | 'exclusive';
  onChange: React.FormEventHandler<HTMLInputElement>;
  clearable?: boolean;
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
