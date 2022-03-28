import React from 'react';
import { PrimaryInput, Label, ErrorLabel, Container, TrailingVisContainer, LeadingVisContainer, WrapperContainer } from './styles';


const TextInputV1 = (props: InputProps) => {
  const {
    onKeyDown = () => { },
    onKeyUp = () => { },
    onCopy = _onCopy,
    onPaste = _onPaste,
    error,
    type = 'shortText',
    label,
    TrailingVis,
    LeadingVis,
    ...rest
  } = props;

  return (
    <>
      {label && <Label className='fs14 fw500'>{label}</Label>}
      <div>
        <Container
          error={error ? true : false}
          {...rest}
          type={type}
        >
          <WrapperContainer>
            {LeadingVis && <LeadingVisContainer type={type}>  {LeadingVis()} </LeadingVisContainer>}
            <PrimaryInput
              onCopy={onCopy}
              onPaste={onPaste}
              onKeyUp={onKeyUp}
              onKeyDown={onKeyDown}
              type={type}
              {...rest}
            />
            {TrailingVis && <TrailingVisContainer type={type}>{TrailingVis()}</TrailingVisContainer>}
          </WrapperContainer>
        </Container>
      </div>
      {error && <ErrorLabel className='fs14 fw500'>{error}</ErrorLabel> }
    </>
  );
};


const _onCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
  e.preventDefault();
  // return false;
};


const _onPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
  e.preventDefault();
  // return false
};


type InputProps = Partial<React.InputHTMLAttributes<HTMLInputElement>> &
TextInputProps;

export type TextInputProps = {
  disabled?: boolean;
  error?: string | boolean;
  required?: boolean;
  LeadingVis:()=> React.ReactNode;
  TrailingVis:()=> React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
  label: string;
  type: 'shortText' | 'exclusive';
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
