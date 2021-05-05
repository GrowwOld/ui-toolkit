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
    onEnterPress,
    onBackspace,

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
        {...restProps}
        className={textAreaClassName}
        style={textAreaStyle}
        onCopy={disableCopyPaste ? (e) => onCopy(e) : () => { }}
        onPaste={disableCopyPaste ? (e) => onPaste(e) : () => { }}
        onKeyUp={(e) => onKeyUp(e, props)}
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

  onEnterPress: () => { },
  onBackspace: () => { },
}


type RequiredProps = {
}


type DefaultProps = {
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

  onEnterPress: (e: React.KeyboardEvent) => void;
  onBackspace: (e: React.KeyboardEvent) => void;
}


TextArea.defaultProps = defaultProps;

export type Props = RequiredProps & DefaultProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default React.memo(TextArea);
