import checkStringMonth from '../utils/checkStringMonth.js';


export function createListCalendar(data) {
    const elementDom = document.querySelector('.main-dropdown_list');
    const list={};
    const calendar = JSON.parse(data.calendar);

    for (let key in calendar) {
        const jsonItem = calendar[key];
        const month = new Date(Number(jsonItem.date)).getMonth();
        const year = new Date(Number(jsonItem.date)).getFullYear();

        list[`${month}_${year}`]=`${month}_${year}`;
    }
    for (let month in list){
        const strMounth = month.slice(-(month.length),1);
        const strYear = month.slice(month.length-4);
        const buttonMonth = document.createElement("a");
        buttonMonth.innerHTML = `<button class="main-dropdown_item">${checkStringMonth(strMounth)}  ${strYear}</button>`;
        buttonMonth.href = `../view/month?page=${month}.html`;
        elementDom.append(buttonMonth);
    }


}