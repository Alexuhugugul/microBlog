import replaceUrl from '../utils/replaceUrl';
import checkStringMonth from '../utils/checkStringMonth';

export function createTasksListDay(instance) {
    const data = instance.getAllItem();
    const keys = JSON.parse(data.keys);
    const url = window.location.search;
    const calendar = JSON.parse(data.calendar);
    const numberDay = replaceUrl(url, /[?page=]/g);
    const arrDate = numberDay.split("_");
    const urlDay = arrDate[0];
    const urlMonth = arrDate[1];
    const urlYear = arrDate[2];
    const domTitlePage = document.querySelector(".day-title");
    const domListTasks = document.querySelector(".day-body");
    const createTask = document.querySelector(".day-button-create");

    domTitlePage.innerHTML = `${urlDay} ${checkStringMonth(urlMonth)} ${urlYear}`;
    createTask.href = `/view/creatorTask?page=${numberDay}`

    calendar.forEach(item => {

        if (numberDay === item.date) {
            item.list_tasks.forEach(task => {
                const itemTask = document.createElement("li");
                itemTask.innerHTML = `<p>${task.text}</p> `;
                itemTask.classList.add(`task-item-${task.type}`);
                itemTask.classList.add(`task-item`);
                domListTasks.append(itemTask);
                itemTask.insertAdjacentHTML("afterbegin", keys[task.type].image)

                itemTask.insertAdjacentHTML("beforeend", "<img class='task-edit' src='../src/asset/images/create-black.svg'/>")
                itemTask.insertAdjacentHTML("beforeend", "<img class='task-delete' src='../src/asset/images/close-black.svg'/>")


                itemTask.querySelector(".task-delete").addEventListener("click", deleteTask)

            })
        }

    })
    function deleteTask(event) {
        const parent = event.target.parentElement;
        const text=parent.querySelector("p").textContent
        parent.remove();
        instance.deleteTask(numberDay,text)
    }

    function editorTextTask(event) {
        const parent = event.target.parentElement;
        const task = parent.querySelector("p")
        const taskEditImg = parent.querySelector("img")
        const inputEdit = document.createElement("input");
        const text = task.textContent;
        inputEdit.value = text
        task.style.display = "none";
        taskEditImg.style.display = "none"
        let save = null;
        const afterFirstChild = parent.childNodes[1];
        if (!document.querySelector(".task-save")) {
            save = document.createElement("img")
        } else {
            save = parent.querySelector(".task-save");
            save.style.display = "block";

        }
        save.src = "../src/asset/images/save-black.svg";
        save.classList = "task-save"

        parent.insertBefore(inputEdit, afterFirstChild)
        parent.append(save)
        const saveTasks = document.querySelectorAll(".task-save");
        saveTasks.forEach(saveTask => {
            saveTask.addEventListener("click", saveTextTask)
        })
    }

    function saveTextTask(event) {
        const parent = event.target.parentElement;
        const task = parent.querySelector("p");
        const input = parent.querySelector("input");
        const edit = parent.querySelector(".task-edit")
        event.target.style.display = "none";
        const oldText = task.textContent;
        task.style.display = "block";
        input.remove()
        edit.style.display = "block";
        const text = input.value;
        task.textContent = text;
        instance.setTask(numberDay, text, oldText)

    }

    const editTasks = document.querySelectorAll(".task-edit");
    editTasks.forEach(editTask => {
        editTask.addEventListener("click", editorTextTask)
    })




}