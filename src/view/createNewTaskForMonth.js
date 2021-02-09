import { actionAddTaskForMonth } from '../controller/createNewTaskForMonth';
import replaceUrl from '../utils/replaceUrl';

const url = window.location.search;
const datePage = replaceUrl(url, /[?page=,.html]/g);

export default class ViewCreatorTasksForMonth {

    createTaskForMonth(tasks, keys) {
        const selectKey = document.querySelector(".create-type_dropdown");
        const save = document.querySelector(".task-save");
        save.addEventListener("click", _saveTask)
        keys.forEach(key => {
            const option = document.createElement("option");
            option.textContent = key.text;
            selectKey.append(option)
        })

        function _saveTask(event) {
            event.preventDefault();
            const text = document.querySelector(".create-text").value;
            const textType= selectKey.value
            const type = keys.find(key=>key.text === textType)
            const value = { "date": datePage, text, "type":type.type };
            actionAddTaskForMonth(value)
            window.history.back();
        }
    }

}