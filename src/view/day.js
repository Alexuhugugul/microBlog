import replaceUrl from '../utils/replaceUrl';
import checkStringMonth from '../utils/checkStringMonth';
import { actionDeleteTask, actionRenameTask } from '../controller/day';


export default class ViewDayPage {
    createTasksListDay(keys, calendar) {

        const url = window.location.search;

        const numberDay = replaceUrl(url, /[?page=]/g);
        const arrDate = numberDay.split("_");
        const urlDay = arrDate[0];
        const urlMonth = arrDate[1];
        const urlYear = arrDate[2];
        const domTitlePage = document.querySelector(".day-title");
        const domListTasks = document.querySelector(".day-body");
        const createTask = document.querySelector(".day-button-create");

        domTitlePage.innerHTML = `${urlDay} ${checkStringMonth(urlMonth)} ${urlYear}`;
        createTask.href = `/pages/creatorTask?page=${numberDay}`

        calendar.forEach(item => {

            if (numberDay === item.date) {
                item.list_tasks.forEach(task => {
                    const itemTask = document.createElement("li");
                    itemTask.innerHTML = `<p>${task.text}</p> `;
                    itemTask.classList.add(`task-item-${task.type}`);
                    itemTask.classList.add(`task-item`);
                    domListTasks.append(itemTask);
                    itemTask.insertAdjacentHTML("afterbegin", keys[task.type].image)

                    itemTask.insertAdjacentHTML("beforeend", `<img class='task-edit task_${task.id}' src='../src/asset/images/create-black.svg'/>`)
                    itemTask.insertAdjacentHTML("beforeend", `<img class="task-delete task_${task.id}" src="../src/asset/images/close-black.svg"/>`)


                    itemTask.querySelector(".task-delete").addEventListener("click", deleteTask)

                })
            }

        })
        function deleteTask(event) {
            const parent = event.target.parentElement;
            const text = parent.querySelector("p").textContent;
            const classIdTask = event.target.classList[1];
            const idTask = classIdTask.replace("task_", "")
            parent.remove();

            actionDeleteTask(Number(idTask))
        }

        function editorTextTask(event) {
            const parent = event.target.parentElement;
            const task = parent.querySelector("p");
            const taskEditImg = parent.querySelector("img");
            const inputEdit = document.createElement("input");
            const text = task.textContent;
            const idTask = event.target.classList[1];
            let save = null;

            inputEdit.value = text;
            task.style.display = "none";
            taskEditImg.style.display = "none";
            const afterFirstChild = parent.childNodes[1];
            if (!parent.querySelector(".task-save")) {
                save = document.createElement("img")
            } else {
                save = parent.querySelector(".task-save");
                save.style.display = "block";

            }
            save.src = "../src/asset/images/save-black.svg";
            save.classList = `task-save ${idTask}`;


            parent.insertBefore(inputEdit, afterFirstChild)
            parent.append(save)
            const saveTasks = parent.querySelectorAll(".task-save");
            saveTasks.forEach(saveTask => {
                saveTask.addEventListener("click", saveTextTask)
            })
        }

        function saveTextTask(event) {
            const parent = event.target.parentElement;
            const task = parent.querySelector("p");
            const input = parent.querySelector("input");
            const edit = parent.querySelector(".task-edit");
            const idTask = event.target.classList[1].replace("task_", "")
            event.target.style.display = "none";
            const oldText = task.textContent;
            task.style.display = "block";
            input.remove()
            edit.style.display = "block";
            const text = input.value;
            task.textContent = text;

            actionRenameTask(Number(idTask), text)

        }

        const editTasks = document.querySelectorAll(".task-edit");
        editTasks.forEach(editTask => {
            editTask.addEventListener("click", editorTextTask)
        })




    }
}
