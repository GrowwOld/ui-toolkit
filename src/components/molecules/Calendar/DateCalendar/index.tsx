import React from 'react';
import cn from 'classnames';
import { KeyboardArrowLeft, KeyboardArrowRight, KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@groww-tech/icon-store/mi';

import { getDatesArray, getMonthAbbrByIndex } from './dateCalendarUtils';

import './dateCalendar.css';

const WEEK_DAYS = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];


class DateCalendar extends React.PureComponent<Props, State> {
  static defaultProps = {
    highlightCurrentDate: false,
    minDate: null,
    maxDate: null
  };


  state:State = {
    dateToShow: this.props.currentDate,
    dates: getDatesArray(this.props.currentDate)
  };


  componentDidUpdate(prevProps: Props) {
    if (prevProps.currentDate.getDate() != this.props.currentDate.getDate()) {
      this.setState({
        dateToShow: this.props.currentDate,
        dates: getDatesArray(this.props.currentDate)
      });
    }
  }


  render() {

    return (
      <div>
        <div className="cc12Box">
          <div>
            {this.getYearUI()}
          </div>
          <div>
            {this.getMonthUI()}
          </div>
          <div>
            {this.getDatesUI()}
          </div>
        </div>
      </div>
    );
  }


  getYearUI = () => {
    const { dateToShow } = this.state;

    return (
      <div>
        <div className="valign-wrapper cc12YearBox">
          <div className="valign-wrapper cur-po">
            <KeyboardDoubleArrowLeft
              fontSize={21}
              onClick={this.goToPreviousYear}
            />
          </div>
          <div onClick={this.goToPreviousMonth}
            className="valign-wrapper cur-po"
          >
            <KeyboardArrowLeft fontSize={21} />
          </div>
          <div className="cc12Year fs15">
            <div>{getMonthAbbrByIndex(dateToShow.getMonth() + 1)} {dateToShow.getFullYear()}</div>
          </div>
          <div onClick={this.goToNextMonth}
            className="valign-wrapper cur-po"
          >
            <KeyboardArrowRight fontSize={21} />
          </div>
          <div className="valign-wrapper cur-po">
            <KeyboardDoubleArrowRight
              fontSize={21}
              onClick={this.goToNextYear}
            />
          </div>
        </div>
      </div>
    );
  }


  getMonthUI = () => {
    return (
      <div>
        <div className="cc12WeekNameBox valign-wrapper fs14 clrSubText">
          {
            WEEK_DAYS.map(day => (
              <div className="cc12WeekName">
                <div>
                  {day}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }


  getDatesUI = () => {
    const { dates, dateToShow } = this.state;
    const { minDate, maxDate } = this.props;

    return (
      <div>
        <div>
          {
            dates.map((dateArr, datesArrIndex) => {
              return (
                <div
                  key={'datesArrIndex' + datesArrIndex}
                  className="valign-wrapper cc12DateRow"
                >
                  {
                    dateArr.map((date) => {
                      if (date !== null) {
                        const newDate = new Date(dateToShow);

                        newDate.setDate(date);

                        const dateSelected = this.isDateSelected(date);

                        return (
                          <div className="cc12DateBlock">
                            <div
                              className={
                                cn('cc12Date valign-wrapper cur-po fs14 circle', {
                                  'cc12DateNotSelected': !dateSelected,
                                  'cc12DateSelected': dateSelected,
                                  'cc12DisableDate': (minDate && this.compareDate(minDate, newDate)) || (maxDate && this.compareDate(newDate, maxDate))
                                })
                              }
                              onClick={() => this.onDateClick(date)}
                            >
                              {date}
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div className="cc12DateBlock">&nbsp;</div>
                      );
                    })
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }


  isDateSelected = (date: number | null) => {
    const { dateToShow } = this.state;
    const { highlightCurrentDate, currentDate } = this.props;

    return (highlightCurrentDate && (currentDate.getDate() === date) && (dateToShow.getFullYear() === currentDate.getFullYear()) && (dateToShow.getMonth() === currentDate.getMonth()));
  };


  goToPreviousMonth = () => {
    const { dateToShow } = this.state;
    const newDate = new Date(dateToShow);

    newDate.setMonth(dateToShow.getMonth() - 1);
    this.setState({ dateToShow: newDate, dates: getDatesArray(newDate) });
  };


  goToNextMonth = () => {
    const { dateToShow } = this.state;
    const newDate = new Date(dateToShow);

    newDate.setMonth(dateToShow.getMonth() + 1);
    this.setState({ dateToShow: newDate, dates: getDatesArray(newDate) });
  };


  goToPreviousYear = () => {
    const { dateToShow } = this.state;
    const newDate = new Date(dateToShow);

    newDate.setFullYear(dateToShow.getFullYear() - 1);
    this.setState({ dateToShow: newDate, dates: getDatesArray(newDate) });
  };


  goToNextYear = () => {
    const { dateToShow } = this.state;
    const newDate = new Date(dateToShow);

    newDate.setFullYear(dateToShow.getFullYear() + 1);
    this.setState({ dateToShow: newDate, dates: getDatesArray(newDate) });
  };


  onDateClick = (date: number) => {
    const { minDate, maxDate, onDateChange } = this.props;
    const { dateToShow } = this.state;
    const newDate = new Date(dateToShow);

    newDate.setDate(date);

    if (minDate && (this.compareDate(minDate, newDate))) {
      return;
    }

    if (maxDate && (this.compareDate(newDate, maxDate))) {
      return;
    }

    onDateChange(newDate);
  }

  /* check date1 is greater than date2 */
  compareDate = (date1: Date, date2: Date) => {
    const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 0, 0, 0);
    const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate(), 0, 0, 0);

    return d1.getTime() > d2.getTime();
  }

}


type Props = {
  currentDate: Date;
  onDateChange: (date:Date)=>void;
  highlightCurrentDate: boolean;
  minDate: Date | null;
  maxDate: Date | null;
};


type State = {
  dateToShow: Date;
  dates: (number | null)[][];
}


export default DateCalendar;
