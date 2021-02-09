import { checkStringMonth } from '../utils/checkStringMonth.js';

export default class viewMainPage {

    constructor() { }

    createListMonths(dayss) {

        const listMonthsAndYears = {};
        const listMonthsInDropdown = document.querySelector('.main-dropdown_list');
        const buttonAddMonth = document.createElement("a");
        const listDate = [];

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
           
            const date = monthAndYear.split("_");
            const month = Number(date[0])
            const year = Number(date[1])
            listDate.push(new Date(year, month));

        }

        listDate.sort((a, b) => b - a);
        listDate.forEach(date => {
            const month = date.getMonth()
            const year = date.getFullYear()
            const buttonMonth = document.createElement("a");

            buttonMonth.innerHTML = `<button class="main-dropdown_item">${checkStringMonth(month)}  ${year}</button>`;
            buttonMonth.href = `../pages/month?page=${month}_${year}.html`;

            listMonthsInDropdown.append(buttonMonth);
        })
        listMonthsInDropdown.append(buttonAddMonth);
    }
}
