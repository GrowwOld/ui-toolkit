import React from 'react';
import cn from 'classnames';

import './textArea.css';


const TextArea = (props: Props) => {
  const {
    disableCopyPaste,
    label,
    error,
    labelStyle,
    errorStyle,
    textAreaStyle,
    parentDivClass,
    ...restProps
  } = props;

  const textAreaClassName = cn({
    'txta37Area': true,
    'txta37Normal': error?.length === 0,
    'txta37Error': error && error.length !== 0
  });

  return (
    <div className={`txta37Div ${parentDivClass}`}>

      {
        label &&
        <div style={labelStyle}
          className="txta37Label"
        >
          {label}
        </div>
      }

      <textarea
        {...restProps}
        className={textAreaClassName}
        style={textAreaStyle}
        onCopy={disableCopyPaste ? (e) => onCopy(e) : () => { }}
        onPaste={disableCopyPaste ? (e) => onPaste(e) : () => { }}
      />

      {
        error && error.length !== 0 &&
        <div style={errorStyle}
          className="txta37ErrorMessage"
        >
          {error}
        </div>
      }
    </div>
  );
};


const onCopy = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
  event.preventDefault();
};


const onPaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
  event.preventDefault();
};


const defaultProps: DefaultProps = {
  labelStyle: {},
  errorStyle: {},
  textAreaStyle: {},
  parentDivClass: '',
  disableCopyPaste: false,
  error: ''
};


type RequiredProps = {
  label?: string;
}


type DefaultProps = {
  error: string;

  /** styling and classNames */
  labelStyle: React.CSSProperties;
  errorStyle: React.CSSProperties;
  textAreaStyle: React.CSSProperties;
  parentDivClass: string;

  /**  bools for utility*/
  disableCopyPaste: boolean;
}


TextArea.defaultProps = defaultProps;

export type Props = RequiredProps & DefaultProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default React.memo(TextArea);
