import creastorCalendar from '../utils/creastorCalendar';
import replaceUrl from '../utils/replaceUrl';
import {checkStringMonth} from '../utils/checkStringMonth';

export default class viewMonth {
    constructor() { }

    createMonth(tasks,collections) {
        const elementDOMTitle = document.querySelector(".month-title_page");
        const elementDOMDropdown = document.querySelector(".month-button_collections");
        const planForMonth = document.querySelector(".month-button_plan-month");
        const elementDOMdays = document.querySelector(".daysItem");
        const paramUrl = window.location.search;
        const hash = replaceUrl(paramUrl, /[?page=,.html]/g);
        const month = checkStringMonth(hash.slice(0, (hash.length - 5)))


        creastorCalendar(elementDOMdays, tasks, true);

        elementDOMTitle.innerHTML = `${month} | Bullet journal`;
        elementDOMDropdown.href = `/pages/collection?page=${hash}.html`;
        planForMonth.href=`/pages/tasksMonth?page=${hash}.html`;

    }
}

