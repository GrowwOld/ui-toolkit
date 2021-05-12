import React from 'react';
import cn from 'classnames';
// import Loader from '../Loader';
import './textinput.css';

class TextInput extends React.PureComponent<TextInputProps> {
  textInputRef = React.createRef<HTMLInputElement>()

  render() {
    const {
      showLabel, prefixComponent, suffixComponent, placeholder, showError, labelClass, inputStyle,
      errorText, fontSize, id, autoComplete, value, inputType, onInput, maxTextLimit, inputClass,
      minNumber, maxNumber, disabled, disableCopyPaste, removeUnderLineOnDisabled, showInfo, infoText, removeUnderLine,
      parentDivClass, onFocus, showParentDivUnderline, onKeyPress
    } = this.props;

    const cssForInputParent = parentDivClass ? parentDivClass : cn('txtinput88parent', { 'removeunderline': ((disabled && (!removeUnderLineOnDisabled)) || removeUnderLine), 'removeParentDivUnderline': showParentDivUnderline, 'pad0': !showLabel });

    return (
      <div id="txtinput88">
        {showLabel && <div className={`txtinput88label ${labelClass}`}>{this.props.label}</div>}
        <div
          className={cssForInputParent}
        >
          {prefixComponent()}
          <input
            className={`txtinput88input ${inputClass}`}
            style={fontSize === '' ? { ...inputStyle } : { fontSize: fontSize, ...inputStyle }}
            id={id}
            type={inputType}
            onInput={onInput}
            value={value}
            maxLength={maxTextLimit}
            min={minNumber}
            max={maxNumber}
            placeholder={placeholder}
            disabled={disabled}
            onCopy={disableCopyPaste ? (e) => this.onCopy(e) : () => { }}
            onPaste={disableCopyPaste ? (e) => this.onPaste(e) : () => { }}
            onKeyUp={(e) => this.onKeyUp(e)}
            onKeyDown={(e) => this.onKeyDown(e)}
            onKeyPress={onKeyPress}
            onFocus={onFocus}
            autoComplete={autoComplete}
            required
            ref={this.textInputRef}
          />
          {suffixComponent()}
        </div>
        {showError ? <div className="errorText">{errorText}</div> : null}
        {showInfo ? <div className="infoText">{infoText}</div> : null}
      </div>
    );
  }

  focus = () => {
    this.textInputRef.current?.focus();
  }

  onCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    // return false;
  }


  onPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    // return false
  }


  onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { onKeyDown } = this.props;
    onKeyDown(event);
  }


  onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { onEnterPress, onBackspace } = this.props;
    if (event.keyCode === 13) {
      if (onEnterPress) {
        onEnterPress(event);
      }
      return false; // returning false will prevent the event from bubbling up.
    } else if (event.keyCode === 8) {
      if (onBackspace) {
        onBackspace(event);
        return false
      }
    } else {
      return true;
    }

    return true;
  }


  public static defaultProps: DefaultProps = {
    inputType: 'text',
    fontSize: '',
    id: '',
    showError: false,
    errorText: 'Please recheck your input',
    disabled: false,
    value: '',
    disableCopyPaste: false,
    maxTextLimit: 250,
    minNumber: 0,
    maxNumber: 10000000,
    autoComplete: "on",
    showLabel: true,
    placeholder: "Enter text",
    prefixComponent: () => null,
    suffixComponent: () => null,
    removeUnderLineOnDisabled: false,
    removeUnderLine: false,
    showInfo: false,
    infoText: '',
    labelClass: '',
    inputClass: '',
    inputStyle: {},
    onKeyDown: () => { },
    showParentDivUnderline: false,
    parentDivClass: '',
    onFocus: () => { },
    onKeyPress: () => { },
    onEnterPress: () => { },
    onBackspace: () => { }
  }

}

type RequiredProps = {
  label: string;
  onInput: React.FormEventHandler<HTMLInputElement>;
}


type DefaultProps = {
  value: string | number,
  id: string,
  inputType: string,
  showError: boolean,
  errorText: string,
  disabled: boolean,
  disableCopyPaste: boolean,
  onEnterPress: (e?: React.KeyboardEvent<HTMLInputElement>) => void,
  onBackspace: (e?: React.KeyboardEvent<HTMLInputElement>) => void,
  maxTextLimit: number,
  minNumber: number,
  maxNumber: number,
  fontSize: string,
  placeholder: string,
  autoComplete: string,
  prefixComponent: () => React.ReactNode,
  suffixComponent: () => React.ReactNode,
  showLabel: boolean,
  removeUnderLineOnDisabled: boolean,
  removeUnderLine: boolean,
  showInfo: boolean,
  infoText: string,
  labelClass: string,
  inputClass: string,
  inputStyle: object,
  showParentDivUnderline: boolean,
  parentDivClass: string,
  onFocus: (e?: React.FocusEvent<HTMLInputElement>) => void,
  onKeyDown: (e?: React.KeyboardEvent<HTMLInputElement>) => void,
  onKeyPress: (e?: React.KeyboardEvent<HTMLInputElement>) => void,
};


type TextInputProps = RequiredProps & DefaultProps;

export default TextInput;
