import { hide, show } from '../utils/showAndHideElement';
import { actionDeleteTaskForMonth, actionUpdateTaskForMonth } from '../controller/tasksMonth';
import replaceUrl from '../utils/replaceUrl';

const url = window.location.search;
const datePage = replaceUrl(url, /[?page=,.html]/g);

export default class ViewTasksForMonth {

    createListTasksForMonth(tasks, keys) {

        const listTask = document.querySelector(".task-month-body");
        const createTask = document.querySelector(".task-month-button-create");

        createTask.href = `/pages/creatorNewTaskForMonth?page=${datePage}`
        tasks.forEach(task => {

            if (task.date === datePage) {
                const blockTask = document.createElement("div");
                const textTask = document.createElement("p");
                blockTask.classList = `block-task task_${task.id}`;
                textTask.innerText = `${task.text}`;
                blockTask.append(textTask);

                blockTask.insertAdjacentHTML("afterbegin", keys[task.type - 1].image);
                blockTask.insertAdjacentHTML("beforeend", `<img class='task-edit task_${task.id}' src='../src/asset/images/create-black.svg'/>`);
                blockTask.insertAdjacentHTML("beforeend", `<img class="task-delete task_${task.id}" src="../src/asset/images/close-black.svg"/>`);
                blockTask.insertAdjacentHTML("beforeend", `<img class="task-cancel task_${task.id}" src="../src/asset/images/close-black.svg"/>`);
                blockTask.insertAdjacentHTML("beforeend", `<img class="task-save task_${task.id}" src="../src/asset/images/save-black.svg"/>`);
                blockTask.insertAdjacentHTML("afterbegin", `<input class="input-edit-task">`);
                blockTask.insertAdjacentHTML("afterbegin", `<select class="create-type_dropdown"></select>`);


                listTask.append(blockTask);

                const keysDropdown = blockTask.querySelector(".create-type_dropdown");
                const svg = blockTask.querySelector("svg");
                svg.classList = `svg-type type_${keys[task.type - 1].type}`;

                keys.forEach(key => {
                    const keyItem = document.createElement("option")
                    keyItem.innerHTML = `${key.text}`;
                    keyItem.classList = `type_${key.type}`;
                    keysDropdown.append(keyItem);
                })

                this.setEvents(blockTask, keys);
            }

        })
    }

    setEvents(parent, keys) {
        const dropdown = parent.querySelector(".create-type_dropdown");
        const typeTask = parent.querySelector(".svg-type");
        const fieldTask = parent.querySelector("p");
        const textTask = fieldTask.textContent;
        const edit = parent.querySelector(".task-edit");
        const deleteTask = parent.querySelector(".task-delete");
        const cancel = parent.querySelector(".task-cancel");
        const input = parent.querySelector(".input-edit-task");
        const save = parent.querySelector(".task-save");
        const idTypeTask = typeTask.classList[1].replace("type_", "");
        const key = keys.find(key => key.id === Number(idTypeTask));


        const classIdTask = parent.classList[1];
        const idTask = classIdTask.replace("task_", "");

        let value = {
            "id": Number(idTask),
            "date": datePage,
            "text": textTask,
            "type": Number(idTypeTask)
        }

        deleteTask.addEventListener("click", _deleteTask);
        edit.addEventListener("click", _editTask);
        save.addEventListener("click", _saveTask);
        cancel.addEventListener("click", _cancelEditTask);


        function _deleteTask() {

            hide(typeTask);
            hide(fieldTask);
            hide(edit);
            hide(deleteTask);

            actionDeleteTaskForMonth(value);
        }

        function _editTask() {

            hide(typeTask);
            hide(fieldTask);
            hide(edit);
            hide(deleteTask);
            show(dropdown);
            show(cancel);
            show(input);
            show(save);

            input.value = textTask;
            dropdown.value = key["text"];

        }

        function _saveTask() {

            show(typeTask);
            show(fieldTask);
            show(edit);
            show(deleteTask);
            hide(dropdown);
            hide(cancel);
            hide(input);
            hide(save);

            const newType = keys.find(key => key.text === dropdown.value);
            fieldTask.textContent = input.value;
            typeTask.innerHTML = newType.image;

            value["text"] = input.value;
            value["type"] = newType.type;

            actionUpdateTaskForMonth(value)

        }

        function _cancelEditTask() {
            
            show(typeTask);
            show(fieldTask);
            show(edit);
            show(deleteTask);
            hide(dropdown);
            hide(cancel);
            hide(input);
            hide(save);
        }

    }

}