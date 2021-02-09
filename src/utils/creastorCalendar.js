import replaceUrl from './replaceUrl';
import { checkStringMonth } from './checkStringMonth';



export default function creastorCalendar(domElement, selectedDates, checkSelectedDayOrSelectedCollection) {
  let row = '<tr>';
  const selectedMonth = window.location.search;
  const hash = replaceUrl(selectedMonth, /[?page=,.html]/g);
  const arrDate = hash.split("_");
  const month = arrDate[0];
  const year = arrDate[1];
  const today = new Date();
  const firstDayMonth = new Date(year, month);
  const lastDayMonth = getLastDateOfMonth(firstDayMonth);
  const lastDayOfWeek = getLastDayOfWeek(firstDayMonth, lastDayMonth);
  const dayOfWeekOfFirstDayOfTheMonth = getDayOfWeekOfFirstDayOfTheMonth(firstDayMonth);

  _emptyCellBeforeFirstDayMonth();
  _getDayMonth(checkSelectedDayOrSelectedCollection);
  _emptyCellLastDayOfMonth();
  _addCalendarInDom(domElement);
  _viewSelectedDate(domElement, selectedDates, checkSelectedDayOrSelectedCollection);



  function _emptyCellBeforeFirstDayMonth() {
    if (dayOfWeekOfFirstDayOfTheMonth != 0) {
      for (let i = 1; i < dayOfWeekOfFirstDayOfTheMonth; i++) row += '<td>';
    } else {
      for (let i = 0; i < 6; i++) row += '<td>';
    }
  }

  function _getDayMonth(checkSelectedDayOrSelectedCollection) {
    for (let i = 1; i <= lastDayMonth; i++) {
      const isTodayDate = i === today.getDate()

      if (!isTodayDate) {
        if (checkSelectedDayOrSelectedCollection) {
          row += `<td><a href="/pages/day?page=${i}_${month}_${year}">${i}</a></td>`;
        } else {
          row += `<td>` + i;
        }
      } else {
        if (checkSelectedDayOrSelectedCollection) {
          row += `<td id="today"><a href="/pages/day?page=${i}_${month}_${year}">${i}</a></td>`;
        } else {
          row += `<td ">` + i
        }
      }
      if (checkForSunday(firstDayMonth, i)) {
        row += '<tr>';
      }
    }
  }


  function _emptyCellLastDayOfMonth() {
    if (lastDayOfWeek != 0) {
      for (let i = lastDayOfWeek; i < 7; i++) {
        row += '<td>'
      };
    }
  }


  function _addCalendarInDom(domElement) {
    domElement.querySelector('tbody').innerHTML = row;
    domElement.querySelector('thead td:last-child').innerHTML = firstDayMonth.getFullYear();
    domElement.querySelector('thead td:first-child').innerHTML = checkStringMonth(firstDayMonth.getMonth());
  }



  function _viewSelectedDate(domElement, selectedDates, checkSelectedDayOrSelectedCollection) {

    if (selectedDates && selectedDates.length) {

      selectedDates.forEach(selectedDate => {

        const columns = domElement.querySelectorAll('td');
        const selectedDateArr = selectedDate.date.split("_");
        const listTasks = selectedDate.list_tasks;
        const year = Number(selectedDateArr[2]);
        const month = Number(selectedDateArr[1]);
        const day = Number(selectedDateArr[0]);



        columns.forEach(column => {
          if (
            _checkDayAndDayCell(column, day) &&
            _checkMonthAndMonthCell(month) &&
            _checkYearAndYearCell(year) &&
            (listTasks && listTasks.length && checkSelectedDayOrSelectedCollection)) {

            column.classList.add('days-select-date');
          }
        })

        columns.forEach(column => {
          if (
            _checkDayAndDayCell(column, day) &&
            _checkMonthAndMonthCell(month) &&
            _checkYearAndYearCell(year) &&
            (!listTasks && !checkSelectedDayOrSelectedCollection)) {

            column.classList.add('days-select-date');
          }
        })
      })
    }
  }

  function _checkDayAndDayCell(cell, day) {
    return Number(cell.innerText) === day;
  }

  function _checkMonthAndMonthCell(month) {
    return firstDayMonth.getMonth() === month;
  }

  function _checkYearAndYearCell(year) {
    return firstDayMonth.getFullYear() === year;
  }

  function getLastDateOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  function getLastDayOfWeek(date, lastDay) {
    return new Date(date.getFullYear(), date.getMonth(), lastDay).getDay();
  }

  function getDayOfWeekOfFirstDayOfTheMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  function checkForSunday(day, index) {
    return new Date(day.getFullYear(), day.getMonth(), index).getDay() == 0;
  }


}

