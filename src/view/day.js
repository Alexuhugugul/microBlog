import replaceUrl from '../utils/replaceUrl';
import { hide, show } from '../utils/showAndHideElement';
import {checkStringMonth} from '../utils/checkStringMonth';
import { actionUpdateDay } from '../controller/day';


export default class ViewDayPage {
    createTasksListDay(keys, days) {

        const url = window.location.search;
        const datePage = replaceUrl(url, /[?page=]/g);
        const arrDate = datePage.split("_");
        const urlDay = arrDate[0];
        const urlMonth = arrDate[1];
        const urlYear = arrDate[2];
        const domTitlePage = document.querySelector(".day-title");
        const domListTasks = document.querySelector(".day-body");
        const createTask = document.querySelector(".day-button-create");
        
        domTitlePage.innerHTML = `${urlDay} ${checkStringMonth(urlMonth)} ${urlYear}`;
        createTask.href = `/pages/creatorTask?page=${datePage}`
        
        days.forEach(day => {
            
            if (datePage === day.date) {
                day.list_tasks.forEach(task => {
                    const itemTask = document.createElement("li");
                    
                    itemTask.innerHTML = `<p>${task.text}</p> `;
                    itemTask.classList.add(`task-item-${task.type}`);
                    itemTask.classList.add(`task-item`);
                    domListTasks.append(itemTask);
                    
                    itemTask.insertAdjacentHTML("afterbegin", keys[task.type - 1].image);
                    itemTask.insertAdjacentHTML("beforeend", `<img class='task-edit task_${task.id}' src='../src/asset/images/create-black.svg'/>`);
                    itemTask.insertAdjacentHTML("beforeend", `<img class="task-delete task_${task.id}" src="../src/asset/images/close-black.svg"/>`);
                    itemTask.insertAdjacentHTML("beforeend", `<img class="task-cancel task_${task.id}" src="../src/asset/images/close-black.svg"/>`);
                    itemTask.insertAdjacentHTML("afterbegin", `<select class="create-type_dropdown"></select>`);
                    
                    itemTask.querySelector(".task-delete").addEventListener("click", deleteTask)
                    itemTask.querySelector(".task-cancel").addEventListener("click", cancelEditorText)
                    
                    const svg = itemTask.querySelector("svg");
                    svg.classList = "svg-type";
                    
                    
                    
                    const keysDropdown = itemTask.querySelector(".create-type_dropdown")
                    
                    keys.forEach(key => {
                        const keyItem = document.createElement("option")
                        keyItem.innerHTML = `${key.text}`;
                        keyItem.classList = `type_${key.type}`;
                        keysDropdown.append(keyItem);
                    })
                    
                })
            }
            
        })
        
        
        const editTasks = document.querySelectorAll(".task-edit");
        editTasks.forEach(editTask => {
            editTask.addEventListener("click", editorTextTask)
        })
        
        function deleteTask(event) {
            const parent = event.target.parentElement;
            const text = parent.querySelector("p").textContent;
            const classIdTask = event.target.classList[1];
            const idTask = classIdTask.replace("task_", "");
            let newDay = null;
            days.forEach(day => {
                const newList = day.list_tasks.filter(task => {
                    if (task.text === text) {
                        newDay = day
                    }
                    return task.id !== Number(idTask)
                });
                day.list_tasks = newList;
            });

            parent.remove();

            actionUpdateDay(newDay)
        }

        function editorTextTask(event) {
            const parent = event.target.parentElement;
            const task = parent.querySelector("p");
            const taskEditImg = parent.querySelector("img");
            const deleteTask = parent.querySelector(".task-delete");
            const cancelEditTask = parent.querySelector(".task-cancel");
            const svgType = parent.querySelector(".svg-type");
            const inputEdit = document.createElement("input");
            const keysDropdown = parent.querySelector(".create-type_dropdown")
            const text = task.textContent;
            const idTask = event.target.classList[1];
            const afterFirstChild = parent.childNodes[1];
            const saveTasks = parent.querySelectorAll(".task-save");
            let save = null;

            inputEdit.value = text;
            

            if (!saveTasks) {
                save = document.createElement("img")
            } else {
                save = saveTasks;
                show(save);
            }

            save.src = "../src/asset/images/save-black.svg";
            save.classList = `task-save ${idTask}`;
            saveTasks.forEach(saveTask => {
                saveTask.addEventListener("click", saveTextTask)
            })

            parent.insertBefore(inputEdit, afterFirstChild);
            parent.append(save);

            hide(task);
            hide(taskEditImg);
            hide(svgType);
            show(keysDropdown);
            hide(deleteTask);
            show(cancelEditTask);

        }

        function cancelEditorText(event) {
            const parent = event.target.parentElement;
            const input = parent.querySelector("input");
            const edit = parent.querySelector(".task-edit");
            const deleteIcon = parent.querySelector(".task-delete");
            const saveIcon = parent.querySelector(".task-save");
            const text = parent.querySelector("p");
            const cancel = event.target;

            hide(input)
            show(edit)
            show(deleteIcon)
            hide(saveIcon)
            hide(cancel)
            show(text)

        }

        function saveTextTask(event) {
            const parent = event.target.parentElement;
            const save = event.target;
            const cancel = parent.querySelector(".task-cancel");
            const svgType = parent.querySelector(".svg-type");
            const taskText = parent.querySelector("p");
            const input = parent.querySelector("input");
            const newText = input.value;
            const edit = parent.querySelector(".task-edit");
            const deleteIcon = parent.querySelector(".task-delete");
            const selectType = parent.querySelector(".create-type_dropdown");
            const selectValueType = selectType.value;
            const idNewType = keys.find(key => key.text === selectValueType);
            const selectDay = days.find(day => day.date === datePage);
            const oldTask = selectDay.list_tasks.find(taskElem => taskText.textContent === taskElem.text)

            oldTask.type = idNewType.type;
            svgType.innerHTML = idNewType.image;

            show(svgType);
            hide(cancel);
            hide(save);
            show(taskText);
            show(edit);
            show(deleteIcon);
            hide(selectType);

            input.remove();
            taskText.textContent = newText;
            oldTask.text = newText;

            actionUpdateDay(selectDay);

        }
    }
}
