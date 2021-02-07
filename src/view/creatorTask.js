import replaceUrl from '../utils/replaceUrl';
import {actionSetNewTask} from '../controller/creatorTask';

export default class ViewCreatorTask{

    createCreatorTask (keys) {
        const url = window.location.search;
        const date = replaceUrl(url, /[?page=]/g);
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
            const obj = {
                "date": date,
                "list_tasks": [{ text, "type": objKey.type }],
    
            }
            actionSetNewTask(obj);
           
            window.history.back();
    
        }
    }
}