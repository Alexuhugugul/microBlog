import { checkStringMonth, checkNumberMonth } from '../utils/checkStringMonth';
import { actionSetNewMonth } from '../controller/createNewMonth';
import { hide, show } from '../utils/showAndHideElement';
const messageError = document.querySelector(".create-month-error");

const list = [];

export default class ViewCreatorMonth {
    creatorMonth(days) {
        const formMonth = document.querySelector(".create-month-body");
        const listFilledMonth = [];
        const listFilledYear = [];

        days.forEach(day => {
            const monthAndYear = day.date;
            const arrMonthAndYear = monthAndYear.split("_");
            list.push(monthAndYear);
            const month = arrMonthAndYear[1];
            const year = arrMonthAndYear[2];
            listFilledMonth.push(month);
            listFilledYear.push(Number(year));

        })
        formMonth.addEventListener("submit", this.submit, false);

        const minYear = Math.min.apply(null, listFilledYear)
        this.createList(minYear)
    }

    createList(minYear) {
        const selectMonth = document.querySelector(".create-month");
        const selectYear = document.querySelector(".create-year");

        for (let i = 0; i < 12; i++) {
            const name = checkStringMonth(i)
            const optionMonth = document.createElement("option");
            optionMonth.innerText = name;
            selectMonth.append(optionMonth)
        }
        for (let i = 0; i < 5; i++) {

            const optionYear = document.createElement("option");
            optionYear.innerText = minYear + i;
            selectYear.append(optionYear)
        }
    }

    submit(event) {
        event.preventDefault();
        const selectMonth = document.querySelector(".create-month");
        const selectYear = document.querySelector(".create-year");
        const month = selectMonth.value;
        const year = selectYear.value;
        const newPage = `0_${checkNumberMonth(month)}_${year}`
        const validation = list.find(item => item === newPage)
        if (!validation) {
            actionSetNewMonth(newPage)
            window.history.back();
        }
        else {
            show(messageError);
        }

    }
}