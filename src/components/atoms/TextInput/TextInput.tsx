import React from 'react';

import cn from 'classnames';

import './textinput.css';

class TextInput extends React.PureComponent<TextInputProps> {
  textInputRef = React.createRef<HTMLInputElement>()


  render() {
    const {
      showLabel, prefixComponent, suffixComponent, placeholder, showError, labelClass, inputStyle,
      errorText, fontSize, id, autoComplete, value, inputType, onInput, maxTextLimit, inputClass,
      minNumber, maxNumber, disabled, disableCopyPaste, removeUnderLineOnDisabled, showInfo, infoText, removeUnderLine,
      parentDivClass, onFocus, showParentDivUnderline, onKeyPress, isMaterialUI, fullWidth, name, inputMode,
      errorTextClass, pattern, step, onKeyDown, label, ...rest
    } = this.props;

    let labelClassName = '';

    const barClass = cn({
      txt88Bar: true,
      txt88BarError: showError
    });

    if (isMaterialUI) {
      labelClassName = cn({
        txt88MlabelError: showError
      });

    } else {
      labelClassName = labelClass;
    }


    let cssForInputParent = parentDivClass ? parentDivClass
      : cn('txtinput88parent',
        {
          'removeunderline': ((disabled && (!removeUnderLineOnDisabled)) || removeUnderLine),
          'removeParentDivUnderline': showParentDivUnderline,
          'pad0': !showLabel
        });

    if (isMaterialUI) {
      cssForInputParent = 'txt88Mgroup';
    }

    return (
      <div id="txtinput88"
        className={cn({ 'txt88Width': fullWidth })}
      >
        {!isMaterialUI && showLabel && <div className={`txtinput88label ${labelClassName}`}>{this.props?.label}</div>}
        <div
          className={cssForInputParent}
        >
          {prefixComponent()}
          <input
            className={`txtinput88input ${inputClass} ${isMaterialUI ? 'txt88InputMUI' : ''}`}
            style={fontSize === '' ? isMaterialUI ? { padding: '10px 10px 10px 2px', ...inputStyle } : { ...inputStyle } : isMaterialUI ? { padding: '10px 10px 10px 2px', fontSize: fontSize, ...inputStyle } : { fontSize: fontSize, ...inputStyle }}
            id={id}
            name={name}
            type={inputType}
            inputMode={inputMode}
            onInput={onInput}
            value={value}
            pattern={pattern}
            maxLength={maxTextLimit}
            min={minNumber}
            max={maxNumber}
            placeholder={isMaterialUI ? '' : placeholder}
            disabled={disabled}
            onCopy={disableCopyPaste ? (e) => this.onCopy(e) : () => { }}
            onPaste={disableCopyPaste ? (e) => this.onPaste(e) : () => { }}
            onKeyUp={(e) => this.onKeyUp(e)}
            onKeyDown={(e) => this.onKeyDown(e)}
            onKeyPress={onKeyPress}
            onFocus={onFocus}
            step={step}
            autoComplete={autoComplete}
            required
            ref={this.textInputRef}
            {...rest}
          />
          {
            isMaterialUI &&
              <>
                <span className={barClass} />

                <label className={labelClass}
                  style={fontSize === '' ? {} : { fontSize: fontSize }}
                >{label}</label>

                {errorText && errorText === 'Please recheck your input' && <div className="txt88MErrorText">{errorText}</div> /* fix issue*/ }

              </>
          }
          {suffixComponent()}
        </div>
        {
          !isMaterialUI &&
            <div>
              {showError ? <div className={`errorText ${errorTextClass}`}>{errorText}</div> : null /* fix issue*/}
              {showInfo ? <div className="infoText">{infoText}</div> : null /* fix issue*/}
            </div>
        }
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

      return false;
      // returning false will prevent the event from bubbling up.
    } else if (event.keyCode === 8) {
      if (onBackspace) {
        onBackspace(event);
        return false;
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
    autoComplete: 'on',
    showLabel: true,
    label: '',
    placeholder: 'Enter text',
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
    onBackspace: () => { },
    step: 1
  }
}


type RequiredProps = {
  onInput: React.FormEventHandler<HTMLInputElement>;
}


type DefaultProps = {
  value: number | string;
  id: string;
  inputType: string;
  showError: boolean;
  errorText: string;
  disabled: boolean;
  disableCopyPaste: boolean;
  onEnterPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBackspace: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  maxTextLimit: number;
  min?: string | number;
  max?: string | number;
  minNumber: string | number;
  maxNumber: string | number;
  fontSize: string | number;
  placeholder?: string;
  autoComplete: string;
  prefixComponent: () => React.ReactNode;
  suffixComponent: () => React.ReactNode;
  showLabel: boolean;
  label: string;
  removeUnderLineOnDisabled: boolean;
  removeUnderLine: boolean;
  showInfo: boolean;
  infoText: string;
  labelClass: string;
  inputClass: string;
  inputStyle: object;
  showParentDivUnderline: boolean;
  parentDivClass: string;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  errorTextClass?: string;
  isMaterialUI?: boolean;
  name?: string;
  pattern?: string;
  step: number;
};


type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;


type InputProps = Partial<React.InputHTMLAttributes<HTMLInputElement>>


type TextInputProps = Overwrite<InputProps, RequiredProps & DefaultProps>;

export default TextInput;
