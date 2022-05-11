import React from 'react';
import cn from 'classnames';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@groww-tech/icon-store/mi';

import './monthCalendar.css';

const MONTHS = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

class MonthCalendar extends React.PureComponent<Props, State> {

  state:State = {
    dateToShow: this.props.currentDate
  };


  render() {
    const { dateToShow } = this.state;
    const { currentDate } = this.props;
    const currentMonthIndex = currentDate.getMonth();

    return (
      <div className="clrText">
        <div className="card mn12Box">
          <div className="valign-wrapper mn12YearRow">
            <div
              className="valign-wrapper cur-po"
              onClick={this.handlePrevYearClick}
            >
              <KeyboardArrowLeft className="mn12YearIcon"/>
            </div>
            <div>{dateToShow.getFullYear()}</div>
            <div
              className="valign-wrapper  cur-po"
              onClick={this.handleForwardYearClick}
            >
              <KeyboardArrowRight className={cn('mn12YearIcon', { 'clrSubText cur-no': dateToShow.getFullYear() === new Date().getFullYear() })}/>
            </div>
          </div>
          <div className="valign-wrapper mn12MonthBox">
            {
              MONTHS.map((month, index) => (
                <div className="mn12Month"
                  key={`${dateToShow?.getTime()}${index}`}
                >
                  <div
                    className={
                      cn('fs13 mn12MonthText valign-wrapper cur-po', {
                        'mn12MonthTextSelected': ((index === currentMonthIndex) && (currentDate.getFullYear() === dateToShow.getFullYear())),
                        'mn12MonthBack': !((index === currentMonthIndex) && (currentDate.getFullYear() === dateToShow.getFullYear()))
                      })
                    }
                    onClick={() => this.onMonthClick(index)}
                  >
                    {month}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }


  onMonthClick = (index:number) => {
    const dateToShow = this.state.dateToShow;
    const newDate = new Date(dateToShow);

    newDate.setDate(1);
    newDate.setMonth(index);

    this.props.onDateChange(newDate);

    this.setState({
      dateToShow: newDate
    });
  }


  handlePrevYearClick = () => {
    const dateToShow = this.state.dateToShow;
    const newDate = new Date(dateToShow);

    newDate.setFullYear(dateToShow.getFullYear() - 1);
    this.setState({ dateToShow: newDate });
  }


  handleForwardYearClick = () => {
    const dateToShow = this.state.dateToShow;

    if (dateToShow.getFullYear() !== new Date().getFullYear()) {
      const newDate = new Date(dateToShow);

      newDate.setFullYear(dateToShow.getFullYear() + 1);
      this.setState({ dateToShow: newDate });
    }
  }
}


type Props = {
  currentDate: Date;
  onDateChange: (date:Date) => void;
};


type State = {
  dateToShow: Date;
}

export default MonthCalendar;
