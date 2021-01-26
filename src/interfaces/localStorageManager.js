const calendar = [
    {
        "id": 1,
        "date": "9_0_2021",
        "list_tasks": [
            {
                "type": 1,
                "text": "Помыть посуду"
            },
            {
                "type": 2,
                "text": "Покормить кошку"
            }
        ]
    },
    {
        "id": 2,
        "date": "12_0_2021",
        "list_tasks": [
            {
                "type": 2,
                "text": "Купить воды"
            }
        ]
    },
]
const keys = [
    {
        "id": 1,
        "type": 1,
        "text": "Задача",
        "image": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/></svg>'
    },
    {
        "id": 2,
        "type": 2,
        "text": "Выполнено",
        "image": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>'
    },
    {
        "id": 3,
        "type": 3,
        "text": "Перенесено",
        "image": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>'
    },
    {
        "id": 4,
        "type": 4,
        "text": "Отменено",
        "image": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>'
    },
    {
        "id": 5,
        "type": 5,
        "text": "Событие",
        "image": '<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>'
    },
    {
        "id": 6,
        "type": 6,
        "text": "Важно",
        "image": '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="12" cy="19" r="2"/><path d="M10 3h4v12h-4z"/></svg>'
    },
]
const collections = [
    {
        "id": 1,
        "date": "11_2020",
        "name": "Зарядка каждое утро",
        "select_date": [
            "9_11_2020",
            "10_0_2021"
        ]
    },
    {
        "id": 2,
        "date": "0_2021",
        "name": "Сон 8 часов",
        "select_date": [
            "11_11_2020",
            "12_0_2021"
        ]
    }
]


export default class localStorageManager {

    setItem() {
        if (!localStorage.calendar) {
            window.localStorage.setItem("calendar", JSON.stringify(calendar));

        }
        if (!localStorage.collections) {
            window.localStorage.setItem("collections", JSON.stringify(collections));

        }
        if (!localStorage.keys) {
            window.localStorage.setItem("keys", JSON.stringify(keys));
        }

    }

    getItem(id) {
        return window.localStorage.getItem(id)
    }

    getAllItem() {
        const obj = {}
        for (let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            obj[key] = window.localStorage.getItem(key);
        }

        return obj;
    }

    removeItem(id) {
        window.localStorage.removeItem(id)
    }

    consoleView() {
        console.log(window.localStorage)
    }

    /*     getCalendar() {
            return localStorage.calendar
        } */
    setItemCalendar(value) {

        const lastKey = JSON.parse(localStorage.calendar).length;
        const oldCalendar = JSON.parse(localStorage.calendar);
        const newCalendar = [...oldCalendar];
        const currentDate = newCalendar.find(elem => elem.date === value.date);

        if (currentDate) {
            currentDate.list_tasks.push(value.list_tasks[0])

        } else {
            const item = {
                "id": lastKey,
                ...value
            }

            newCalendar.push(item);
        }
        localStorage.setItem("calendar", JSON.stringify(newCalendar));
    }

    setItemTask(date, newText, oldText) {
        const tasks = JSON.parse(localStorage.calendar);
        const task = tasks.find(el => el.date === date).list_tasks;
        const obj = task.find(el => el.text === oldText)
        obj.text = newText;
        console.log('task', tasks)
        localStorage.setItem("calendar", JSON.stringify(tasks));

    }

    deleteItemTask(date, text) {
        const tasks = JSON.parse(localStorage.calendar);
        const task = tasks.find(el => el.date === date);
        const obj = task.list_tasks.filter(el => el.text !== text)
        task.list_tasks = obj
        localStorage.setItem("calendar", JSON.stringify(tasks));

    }

    setDateInCollections(date, name, selectedDate) {
        const collections = JSON.parse(localStorage.collections);
        const collection = collections.find(el => el.date === date && el.name === name);
        collection.select_date.push(selectedDate)
        localStorage.setItem("collections", JSON.stringify(collections));

    }

    deleteDateInCollections(date, name, selectedDate) {
        const collections = JSON.parse(localStorage.collections);
        const collection = collections.find(el => el.date === date && el.name === name);

        const arr = collection.select_date.filter(el => el !== selectedDate)
        collection.select_date = arr
        localStorage.setItem("collections", JSON.stringify(collections));
    }

    setNewCollection(date,name){
        const collections=JSON.parse(localStorage.collections);
        const currentDate = collections.find(collection=>collection.date===date)
        console.log(date,name,currentDate)
    }
}
