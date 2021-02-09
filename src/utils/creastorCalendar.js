import replaceUrl from './replaceUrl';

function getLastDateOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}


export default function creastorCalendar(domElement, selectedDates, statusdays) {
  const selectedMonth = window.location.search;
  const hash = replaceUrl(selectedMonth, /[?page=,.html]/g);
  const year = hash.slice((hash.length - 4));
  const monthYear = hash.slice(0, (hash.length - 5));
  const today = new Date();
  var D1 = new Date(year, monthYear),
    D1last = getLastDateOfMonth(D1),
    D1Nlast = new Date(D1.getFullYear(), D1.getMonth(), D1last).getDay(), // день недели последнего дня месяца
    D1Nfirst = new Date(D1.getFullYear(), D1.getMonth(), 1).getDay(), // день недели первого дня месяца
    days1 = '<tr>',
    month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]; // название месяца, вместо цифр 0-11


  // пустые клетки до первого дня текущего месяца
  if (D1Nfirst != 0) {
    for (var i = 1; i < D1Nfirst; i++) days1 += '<td>';
  } else { // если первый день месяца выпадает на воскресенье, то требуется 7 пустых клеток 
    for (var i = 0; i < 6; i++) days1 += '<td>';
  }

  // дни месяца
  for (var i = 1; i <= D1last; i++) {
    const isTodayDate = i === today.getDate()

    if (!isTodayDate) {
      if (statusdays) {
        days1 += `<td><a href="/pages/day?page=${i}_${monthYear}_${year}">${i}</a></td>`;
      } else {
        days1 += `<td>` + i;
      }

    } else {
      if (statusdays && (monthYear == today.getMonth()) && (year == today.getFullYear())) {
        days1 += `<td id="today"><a href="/pages/day?page=${i}_${monthYear}_${year}">${i}</a></td>`;  // сегодняшней дате можно задать стиль CSS
      } else if (statusdays && (monthYear !== today.getMonth()) && (year !== today.getFullYear())) {
        days1 += `<td id="today"><a href="/pages/day?page=${i}_${monthYear}_${year}">${i}</a></td>`;  // сегодняшней дате можно задать стиль CSS
      }
      else {
        days1 += `<td ">` + i
      }
    }
    if (new Date(D1.getFullYear(), D1.getMonth(), i).getDay() == 0) {  // если день выпадает на воскресенье, то перевод строки
      days1 += '<tr>';
    }
  }

  // пустые клетки после последнего дня месяца
  if (D1Nlast != 0) {
    for (var i = D1Nlast; i < 7; i++) days1 += '<td>';
  }


  domElement.querySelector('tbody').innerHTML = days1;
  domElement.querySelector('thead td:last-child').innerHTML = D1.getFullYear();
  domElement.querySelector('thead td:first-child').innerHTML = month[D1.getMonth()];

  if (selectedDates && selectedDates.length) {
    selectedDates.forEach(timestamp => {

      const elemsDomTD = domElement.querySelectorAll('td');

      const timestampArr = timestamp.date.split("_");
      const list=timestamp.list_tasks
      const year = Number(timestampArr[2])
      const monthYear = Number(timestampArr[1])
      const day = Number(timestampArr[0])

      elemsDomTD.forEach(el => {
        if ((Number(el.innerText) === day) && (D1.getMonth() === monthYear) && (D1.getFullYear() === year) && (list && list.length && statusdays)) {
          el.classList.add('days-select-date');

        }
      })

      elemsDomTD.forEach(el => {
        if ((Number(el.innerText) === day) && (D1.getMonth() === monthYear) && (D1.getFullYear() === year) && (!list  && !statusdays)) {
          el.classList.add('days-select-date');

        }
      })

    })
  }

}



