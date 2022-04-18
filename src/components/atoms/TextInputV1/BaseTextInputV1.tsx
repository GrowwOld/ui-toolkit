import React from 'react';

import { PrimaryInput, Label, ErrorLabel, Container, TrailingVisContainer, LeadingVisContainer, WrapperContainer } from './styles';

import { TextInputProps } from './TextInputV1';


const BaseTextInputV1 = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const {
    onKeyDown = () => { },
    onKeyUp = () => { },
    onCopy = () => {},
    onPaste = () => {},
    error,
    variant = 'default',
    label,
    PrefixComponent,
    SuffixComponent,
    ...rest
  } = props;

  return (
    <>
      {label && <Label className='fs14 fw500'>{label}</Label>}
      <Container
        error={error ? true : false}
        variant={variant}
        {...rest}
      >
        <WrapperContainer variant={variant}>
          {PrefixComponent && <TrailingVisContainer variant={variant}>{PrefixComponent()}</TrailingVisContainer>}
          <PrimaryInput
            ref={ref}
            className='fs16'
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


export default BaseTextInputV1;
