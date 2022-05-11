import React from 'react';

import { PrimaryInput, Label, ErrorLabel, Container, TrailingVisContainer, LeadingVisContainer, WrapperContainer } from './styles';

import { TextInputProps } from './TextInputV1';


const BaseTextInputV1 = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const {
    onKeyDown = () => { },
    onKeyUp = () => { },
    onCopy = () => { },
    onPaste = () => { },
    error,
    variant = 'default',
    size = 'medium',
    label,
    PrefixComponent,
    SuffixComponent,
    ...rest
  } = props;

  //switch for size
  return (
    <>
      {label && <Label className='fs14 fw500'>{label}</Label>}
      <Container
        error={error ? true : false}
        variant={variant}
      >
        <WrapperContainer variant={variant}>
          {PrefixComponent && <TrailingVisContainer variant={variant}>{PrefixComponent()}</TrailingVisContainer>}
          <PrimaryInput
            ref={ref}
            className={calculateInputClass(size)}
            onCopy={onCopy}
            onPaste={onPaste}
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
            variant={variant}
            {...rest}
          />
          {SuffixComponent && <LeadingVisContainer variant={variant}>  {SuffixComponent()} </LeadingVisContainer>}
        </WrapperContainer>
      </Container>
      <ErrorLabel
        className='fs14 fw400'
        error={error ? true : false}
      >
        {error}
      </ErrorLabel>

    </>
  );
});


const calculateInputClass = (size:TextInputProps['size']):string => {
  let className = 'fw500 ';

  switch (size) {
    case 'small':
      className += 'fs14';
      break;

    case 'medium':
      className += 'fs16';
      break;

    case 'large':
      className += 'fs22';
      break;

    default:
      className += 'fs16';
      break;

  }

  return className;
};


export default BaseTextInputV1;
