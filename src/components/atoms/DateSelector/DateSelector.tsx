import React, { PureComponent } from 'react';

import { Clear } from '@groww-tech/icon-store/mi';

import { Button } from '../Button';
import { Popup } from '../Popup';

import { ordinalSuffixOf } from '../../../utils/helper';

import './dateSelector.css';

const ALL_DATES = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ];

const INVOKE_MODE = {
  POPUP: 'POPUP',
  TOOLTIP: 'TOOLTIP',
  DEFAULT: 'DEFAULT'
} as const;

class DateSelector extends PureComponent<Props, State> {

  state: State = {
    selectedDate: this.props.defaultDate
  }


  render() {
    const {
      visible,
      onClose,
      invokeMode,
      tooltipTop,
      tooltipLeft
    } = this.props;

    if (invokeMode === INVOKE_MODE.POPUP) {
      return (
        <Popup
          visible={visible}
          onClose={onClose}
          width={400}
          customStyles={{ padding: 15 }}
        >
          {this.getMainUi()}
        </Popup>
      );

    } else if (invokeMode === INVOKE_MODE.TOOLTIP) {
      return (
        <div
          className="date101TooltipMainDiv"
          style={
            {
              top: tooltipTop,
              left: tooltipLeft
            }
          }
        >
          {this.getMainUi()}
        </div>
      );

    } else if (invokeMode === INVOKE_MODE.DEFAULT) {
      return this.getCalendarUI();
    }
  }


  getMainUi = () => {

    const {
      titleText,
      onClose,
      invokeMode,
      buttonText
    } = this.props;
    const { selectedDate } = this.state;
    const selectedDateLabel = `${ordinalSuffixOf(selectedDate)} of every month`;

    return (
      <div className="date101MainDiv">
        <div className="date101Label">
          {titleText}
        </div>
        {
          invokeMode === INVOKE_MODE.TOOLTIP
            ? (
              <Clear
                size={18}
                className="date101CrossButton"
                onClick={onClose}
              />
            )
            : null
        }
        <div className="date101SelectedLabel">
          {selectedDateLabel}
        </div>

        {this.getCalendarUI()}

        <Button
          buttonText={buttonText}
          onClick={this.confirmDate}
          buttonType='Primary'
          height={43}
          width={270}
        />
      </div>
    );
  }


  getCalendarUI = () => {
    const { availableDates, invokeMode, defaultDate } = this.props;
    const { selectedDate } = this.state;

    return (
      <div className="date101Grid-container">
        {
          ALL_DATES.map((date, index) => {
            const isDisabled = availableDates.indexOf(date) === -1;
            let itemClass = 'date101Grid-item';

            if (defaultDate === date) {
              itemClass += ' previously-active';

            } else if (selectedDate === date) {
              itemClass += invokeMode === INVOKE_MODE.DEFAULT ? ' default-active' : ' active';

            } else if (isDisabled) {
              itemClass += ' disabled';

            } else {
              itemClass += ' regular';
            }

            return (
              <div className={itemClass}
                key={index}
                onClick={() => this.selectDate(date)}
              >
                {date}
              </div>
            );
          })
        }
      </div>
    );
  }


  confirmDate = () => {
    const { onDateChange, onClose } = this.props;
    const { selectedDate } = this.state;

    onDateChange(selectedDate);
    onClose();
  }


  selectDate(date: number) {
    const { invokeMode, onDateChange } = this.props;

    this.setState({
      selectedDate: date
    }, () => {
      if (invokeMode === INVOKE_MODE.DEFAULT) {
        onDateChange(date);
      }
    });
  }


  public static defaultProps: DefaultProps = {
    availableDates: ALL_DATES,
    visible: false,
    onClose: () => { },
    buttonText: 'CONFIRM DATE',
    titleText: 'Select a date',
    tooltipTop: 0,
    tooltipLeft: 0,
    invokeMode: INVOKE_MODE.POPUP
  }
}


type State = {
  selectedDate: number;
}


type RequiredProps = {
  onDateChange: (num: number) => void;
  defaultDate: number;
}


type DefaultProps = {
  availableDates: number[];
  visible: boolean;
  onClose: () => void;
  buttonText: string;
  titleText: string;
  tooltipTop: number | string;
  tooltipLeft: number | string;
  invokeMode: ValueOf<typeof INVOKE_MODE>;
}

export type Props = RequiredProps & DefaultProps;


export default DateSelector;
