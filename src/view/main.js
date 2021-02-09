import {checkStringMonth} from '../utils/checkStringMonth.js';

export default class viewMainPage {

    constructor() { }

    createListMonths(dayss) {

        const listMonthsAndYears = {};
        const listMonthsInDropdown = document.querySelector('.main-dropdown_list');
        const buttonAddMonth = document.createElement("a");

        buttonAddMonth.href = `../pages/creatorNewMonth.html`;
        buttonAddMonth.innerHTML = `<button class="main-add-item">Добавить новый месяц</button>`;

        for (let daysKey in dayss) {
            const days = dayss[daysKey];
            const date = days.date;
            const arrDate = date.split("_");
            const month = arrDate[1];
            const year = arrDate[2];

            listMonthsAndYears[`${month}_${year}`] = `${month}_${year}`;
        }

        for (let monthAndYear in listMonthsAndYears) {
            const buttonMonth = document.createElement("a");
            const date = monthAndYear.split("_");
            const month = date[0];
            const year = date[1];

            buttonMonth.innerHTML = `<button class="main-dropdown_item">${checkStringMonth(month)}  ${year}</button>`;
            buttonMonth.href = `../pages/month?page=${month}_${year}.html`;

            listMonthsInDropdown.append(buttonMonth);
        }
        listMonthsInDropdown.append(buttonAddMonth);

    }
}
