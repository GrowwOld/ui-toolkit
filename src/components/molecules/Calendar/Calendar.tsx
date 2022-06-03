import React from 'react';

import MonthCalendar from './MonthCalendar';
import DateCalendar from './DateCalendar';

export const CALENDAR_TYPE = {
  MONTH: 'MONTH',
  DATE: 'DATE'
};


const Calendar = (props:Props) => {
  const {
    type,
    currentDate,
    onDateChange,
    minDate,
    maxDate,
    highlightCurrentDate
  } = props;
  /* restprops is props we have to send to MonthCalendar or DateCalendar */

  const emptyFunction = () => void 0;

  if (type === CALENDAR_TYPE.MONTH) {

    return (
      <MonthCalendar currentDate={currentDate || new Date()}
        onDateChange={onDateChange || emptyFunction}
      />
    );

  } else if (type === CALENDAR_TYPE.DATE) {
    return (
      <DateCalendar
        minDate={minDate}
        maxDate={maxDate}
        onDateChange={onDateChange || emptyFunction}
        currentDate={currentDate || new Date()}
        highlightCurrentDate={highlightCurrentDate}
      />
    );

  }

  return <div />;
};


export type Props = {
  type: ValueOf<typeof CALENDAR_TYPE>;
} & Partial<React.ComponentProps<typeof MonthCalendar>>
& Partial<React.ComponentProps<typeof DateCalendar>>;

export default Calendar;
