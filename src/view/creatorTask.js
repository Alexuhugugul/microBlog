import replaceUrl from '../utils/replaceUrl';
import { actionSetNewTask } from '../controller/creatorTask';

export default class ViewCreatorTask {

    createCreatorTask(keys, days) {

        const url = window.location.search;
        const date = replaceUrl(url, /[?page=]/g);
        const searchDate = days.find(day => day.date === date) ?? false;

        const submitForm = document.querySelector(".task-body");

        const keysDropdown = document.querySelector(".create-type_dropdown");

        keys.forEach(key => {
            const keyItem = document.createElement("option")
            keyItem.innerHTML = `${key.text}`;
            keyItem.classList = `type_${key.type}`;
            keysDropdown.append(keyItem);
        })

        if (submitForm.addEventListener) {
            submitForm.addEventListener("submit", submit, false);
        } else if (submitForm.attachEvent) {
            submitForm.attachEvent('onsubmit', submit);
        }

        function submit(e) {
            e.preventDefault();
            const keyText = keysDropdown.value;
            const objKey = keys.find(key => key.text === keyText);


            const text = document.querySelector(".create-text").value;

            if (searchDate) {
                searchDate.list_tasks.push({ text, "type": objKey.type });
                const obj={...searchDate};

                actionSetNewTask(obj);

            } else {
                const obj = {
                    "date": date,
                    "list_tasks": [{ text, "type": objKey.type }],

                }
                actionSetNewTask(obj);
            }


            window.history.back();

        }
    }
}