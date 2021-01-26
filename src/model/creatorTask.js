import replaceUrl from '../utils/replaceUrl';

export function creatorTask(instance) {
    const data = instance.getAllItem();
    const url = window.location.search;
    const date = replaceUrl(url, /[?page=]/g);
    const submitForm = document.querySelector(".task-body");
    const calendar = JSON.parse(data.calendar);
    const keysDropdown = document.querySelector(".create-type_dropdown");
    const keys = JSON.parse(data.keys)
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

        instance.setCalendar(obj);
        window.history.back();

    }
}