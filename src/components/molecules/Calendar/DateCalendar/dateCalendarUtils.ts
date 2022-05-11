function getDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

export function getDatesArray(dateToShow: Date) {
  const dates:(number | null)[][] = [];

  const totalDaysInMonth = getDaysInMonth(dateToShow.getMonth() + 1, dateToShow.getFullYear());

  let currentWeek = 0;

  for (let date = 1; date <= totalDaysInMonth; date += 1) {
    const dateToSet = new Date(dateToShow.getFullYear(), dateToShow.getMonth(), date);
    const weekDay = dateToSet.getDay();

    if (dates[currentWeek]) {
      if (dates[currentWeek][weekDay]) {
        /* increase currentWeeek and initialize new array into dates */
        dates.push([ null, null, null, null, null, null, null ]);
        currentWeek++;

      } else if (weekDay === 0) {
        /* increase currentWeeek and initialize new array into dates */
        dates.push([ null, null, null, null, null, null, null ]);
        currentWeek++;
      }

    } else {
      dates.push([ null, null, null, null, null, null, null ]);
    }

    dates[currentWeek][weekDay] = date;
  }

  return dates;
}

export function getMonthAbbrByIndex(monthNumber: number): string {
  if (monthNumber < 1 || monthNumber > 12) {
    return '';
  }

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  return monthNames[ monthNumber - 1 ];
}
