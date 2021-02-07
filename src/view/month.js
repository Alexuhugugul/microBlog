import { calendar } from '../utils/calendar';
import replaceUrl from '../utils/replaceUrl';
import checkStringMonth from '../utils/checkStringMonth';

export default class viewMonth {
    constructor() { }

    createMonth(tasks,collections) {
        const elementDOMTitle = document.querySelector(".month-title_page");
        const elementDOMDropdown = document.querySelector(".month-button_collections");
        const elementDOMCalendar = document.querySelector(".calendarItem");
        const paramUrl = window.location.search;
        const hash = replaceUrl(paramUrl, /[?page=,.html]/g);
        const month = checkStringMonth(hash.slice(0, (hash.length - 5)))

        const listTasksDate = [];
        tasks.forEach(task => {
            listTasksDate.push(task.date);
        });


        calendar(elementDOMCalendar, listTasksDate, true);

        elementDOMTitle.innerHTML = `${month} | Bullet journal`;
        collections.forEach(collection => {

            elementDOMDropdown.href = `/pages/collection?page=${hash}.html`

        })

    }
}

