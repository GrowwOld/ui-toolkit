import React from 'react';
import { TextInputProps } from '.';
import { PrimaryInput, Label, ErrorLabel, Container, TrailingVisContainer, LeadingVisContainer, WrapperContainer } from './styles';


export const BaseTextInputV1 = (props: TextInputProps) => {
  const {
    onKeyDown = () => { },
    onKeyUp = () => { },
    onCopy = _onCopy,
    onPaste = _onPaste,
    error,
    variant = 'shortText',
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
          variant={variant}
        >
          <WrapperContainer>
            {LeadingVis && <LeadingVisContainer variant={variant}>  {LeadingVis()} </LeadingVisContainer>}
            <PrimaryInput
              onCopy={onCopy}
              onPaste={onPaste}
              onKeyUp={onKeyUp}
              onKeyDown={onKeyDown}
              variant={variant}
              {...rest}
            />
            {TrailingVis && <TrailingVisContainer variant={variant}>{TrailingVis()}</TrailingVisContainer>}
          </WrapperContainer>
        </Container>
      </div>
      {error && <ErrorLabel className='fs14 fw400'>{error}</ErrorLabel>}
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
