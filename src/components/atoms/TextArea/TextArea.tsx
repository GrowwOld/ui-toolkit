import React from 'react';
import cn from 'classnames';

import './textArea.css';

const TextArea = (props: Props) => {
  const {
    // bools for utility
    disableCopyPaste,
    showError,

    // string content for component
    label,
    error,

    // styling and classNames
    labelStyle,
    errorStyle,
    textAreaStyle,
    parentDivClass,

    // event handlers
    onKeyPress,
    onFocus,
    onEnterPress,
    onBackspace,
    onKeyDown,

    ...restProps
  } = props;

  const textAreaClassName = cn({
    "txta37Area": true,
    "txta37Normal": !showError,
    "txta37Error": showError
  });

  return (
    <div className={`txta37Div ${parentDivClass}`}>

      {
        label &&
        <div style={labelStyle} className="txta37Label">
          {label}
        </div>
      }

      <textarea
        className={textAreaClassName}
        style={textAreaStyle}

        onCopy={disableCopyPaste ? (e) => onCopy(e) : () => { }}
        onPaste={disableCopyPaste ? (e) => onPaste(e) : () => { }}
        onKeyUp={(e) => onKeyUp(e, props)}
        {...restProps}
      />

      {
        showError &&
        <div style={errorStyle} className="txta37ErrorMessage">
          {error}
        </div>
      }
    </div>
  )
}


const onCopy = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
  event.preventDefault();
}


const onPaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
  event.preventDefault();
}


const onKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>, props: Props) => {
  const { onEnterPress, onBackspace } = props;
  if (event.code === "Enter" || event.keyCode === 13) {
    if (onEnterPress) {
      onEnterPress(event);
    }
    return false; // returning false will prevent the event from bubbling up.
  } else if (event.code === "Backspace" || event.keyCode === 8) {
    if (onBackspace) {
      onBackspace(event);
      return false
    }
  } else {
    return true;
  }

  return true;
}


const defaultProps: DefaultProps = {
  id: "",
  rows: 5,
  cols: 10,
  value: "",
  disabled: false,
  labelStyle: {},
  errorStyle: {},
  showError: false,
  textAreaStyle: {},
  parentDivClass: "",
  disableCopyPaste: false,
  error: "there's an error",
  placeholder: "start typing here",

  onChange: () => { },
  onEnterPress: () => { },
  onBackspace: () => { },
  onFocus: () => { },
  onKeyDown: () => { },
  onKeyPress: () => { }
}


type RequiredProps = {
}


type DefaultProps = {
  id: string,
  rows: number;
  cols: number;
  error: string;
  value: string;
  label?: string;
  disabled: boolean;
  labelStyle: object;
  errorStyle: object;
  showError: boolean;
  placeholder: string;
  textAreaStyle: object;
  parentDivClass: string;
  disableCopyPaste: boolean,


  onChange: (e: React.FormEvent) => void;
  onEnterPress: (e: React.KeyboardEvent) => void;
  onBackspace: (e: React.KeyboardEvent) => void;
  onFocus: (e: React.FocusEvent) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
}


TextArea.defaultProps = defaultProps;

export type Props = RequiredProps & DefaultProps;

export default React.memo(TextArea);
