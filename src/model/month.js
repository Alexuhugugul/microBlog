import { calendar } from '../utils/calendar';
import replaceUrl from '../utils/replaceUrl';
import checkStringMonth from '../utils/checkStringMonth';


export function createMonth(data) {
    const elementDOMTitle = document.querySelector(".month-title_page");
    const elementDOMDropdown = document.querySelector(".month-button_collections");
    const elementDOMCalendar = document.querySelector(".calendarItem");
    const paramUrl = window.location.search;
    const hash = replaceUrl(paramUrl, /[?page=,.html]/g);
    const month = checkStringMonth(hash.slice(0, (hash.length - 5)))
    const collections = JSON.parse(data.collections);
    const tasks = JSON.parse(data.calendar);
    const listTasksDate = [];

    tasks.forEach(task => {
        listTasksDate.push(task.date);
    });

    calendar(elementDOMCalendar, listTasksDate, true);

    elementDOMTitle.innerHTML = `${month} | Bullet journal`;
    collections.forEach(collection => {

        elementDOMDropdown.href = `/view/collection?page=${hash}.html`

    })

}
