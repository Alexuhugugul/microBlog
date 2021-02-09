const days = [
    {
        "id": 1,
        "date": "9_0_2021",
        "list_tasks": [
            {
                "id": 1,
                "type": 1,
                "text": "Помыть посуду"
            },
            {
                "id": 2,
                "type": 2,
                "text": "Покормить кошку"
            },
            {
                "id": 3,
                "type": 2,
                "text": "Покормить кошку Basya"
            }
        ]
    },
    {
        "id": 2,
        "date": "12_0_2021",
        "list_tasks": [
            {
                "id": 4,
                "type": 3,
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
        if (!localStorage.days) {
            window.localStorage.setItem("days", JSON.stringify(days));

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
            if (key === "loglevel:webpack-dev-server") {
                continue;
            }
            const itemLocalStorage = window.localStorage.getItem(key);
            obj[key] = JSON.parse(itemLocalStorage)
        }
        return obj;
    }

    // getDatadayss() {
    //     const storedayss = window.localStorage.days;
    //     const days = JSON.parse(storedayss);

    //     return days;
    // }

    // getDataKeys(){
    //     const storeKeys = window.localStorage.keys;
    //     const keys = JSON.parse(storeKeys);

    //     return keys;
    // }

    // getDataCollections(){
    //     const storeCollections = window.localStorage.collections;
    //     const collections = JSON.parse(storeCollections);

    //     return collections;
    // }

    removeItem(id) {
        window.localStorage.removeItem(id)
    }
    /* 
        consoleView() {
            console.log(window.localStorage)
        } */

    /*     getdays() {
            return localStorage.days
        } */
    /*   setItemdays(value, nameAttribute) {
          console.log(value, nameAttribute)
          const lastKey = JSON.parse(localStorage.days).length;
          const olddays = JSON.parse(localStorage.days);
          const newdays = [...olddays];
          const currentDate = newdays.find(elem => elem.date === value.date);
  
          if (currentDate) {
              currentDate.list_tasks.push(value.list_tasks[0])
  
          } else {
              const item = {
                  "id": lastKey,
                  ...value
              }
  
              newdays.push(item);
          }
          localStorage.setItem("days", JSON.stringify(newdays));
      } */



    setDateInCollections(date, name, selectedDate) {
        const collections = JSON.parse(localStorage.collections);
        const collection = collections.find(el => el.date === date && el.name === name);
        collection.select_date.push(selectedDate)
        localStorage.setItem("collections", JSON.stringify(collections));

    }



    // setNewCollection(date, name) {
    //     const collections = JSON.parse(localStorage.collections);

    //     const lastKey = collections.length;
    //     const newCollection = {
    //         "id": lastKey,
    //         date,
    //         name,
    //         "select_date": []
    //     }
    //     collections.push(newCollection)
    //     localStorage.setItem("collections", JSON.stringify(collections));

    // }



    renameCollection(date, name, oldName) {
        const collections = JSON.parse(localStorage.collections);
        const filterByDate = collections.filter(el => el.date === date)
        const oldNameCollection = filterByDate.find(el => el.name === oldName)
        oldNameCollection.name = name
        localStorage.setItem("collections", JSON.stringify(collections));

    }









    /*    deleteItemTask(date, text) {
           const tasks = JSON.parse(localStorage.days);
           const task = tasks.find(el => el.date === date);
           const obj = task.list_tasks.filter(el => el.text !== text)
           task.list_tasks = obj
           localStorage.setItem("days", JSON.stringify(tasks));
   
       } */

    deleteDateInCollections(date, name, selectedDate) {
        const collections = JSON.parse(localStorage.collections);
        const collection = collections.find(el => el.date === date && el.name === name);

        const arr = collection.select_date.filter(el => el !== selectedDate)
        collection.select_date = arr
        localStorage.setItem("collections", JSON.stringify(collections));
    }

    deleteCollection(date, name) {
        const collections = JSON.parse(localStorage.collections);
        const othersdayss = collections.filter(el => el.date !== date)
        const filterByDate = collections.filter(el => el.date === date)
        const filterByName = filterByDate.filter(el => el.name !== name)
        const obj = []
        obj.push(...othersdayss)
        obj.push(...filterByName)

        localStorage.setItem("collections", JSON.stringify(obj));
    }






    /****************************8 */

    /*   getDataByIdAndAttribute(id, attribute) {
          const store = window.localStorage;
          const data = store[attribute];
          const collections = JSON.parse(data);
          collections.forEach(day => {
              const result = day.list_tasks.find(elem => elem.id == id)
  
              console.log(day.list_tasks)
              console.log(day)
          })
  
          return collections;
      } */

    getDataByNameAttribute(attribute) {
        const store = window.localStorage;
        const data = store[attribute];
        const collections = JSON.parse(data);

        return collections;

    }

    deleteDataById(id, attribute) {
        const days = this._getLocalStorageElement(attribute);

        days.forEach(day => {

            const tasks = day.list_tasks;
            const filteredTask = tasks.filter(task => task.id !== id);

            day.list_tasks = filteredTask;
        })

        this._saveStore(attribute, days);

    }

    /*     setNewCollection(date, name) {
            const collections = JSON.parse(localStorage.collections);
    
            const lastKey = collections.length;
            const newCollection = {
                "id": lastKey,
                date,
                name,
                "select_date": []
            }
            collections.push(newCollection)
            localStorage.setItem("collections", JSON.stringify(collections));
    
        } */
    setNewItem(value, nameAttribute) {

        const store = this._getLocalStorageElement(nameAttribute);
        const lastKey = this._getLastKey(store, nameAttribute);

        if (nameAttribute === "days") {
            const task = value.list_tasks[0];
            const currentDate = store.find(elem => elem.date === value.date);

            if (currentDate) {
                task["id"] = lastKey;
                currentDate.list_tasks.push(task);

            } else {
                const newDay = {
                    "id": lastKey,
                    ...value
                }

                store.push(newDay);
            }
        }
        else if (nameAttribute === "collections") {

            const newCollection = {
                "id": lastKey,
                ...value,
                "select_date": []
            }
            store.push(newCollection)

        }

        this._saveStore(nameAttribute, store);
    }


    _getLocalStorageElement(attribute) {
        const store = window.localStorage;
        const data = store[attribute];
        const element = JSON.parse(data);

        return element;
    }

    _getLastKey(store, nameAttribute) {
        const arrId = [];
        
        if (nameAttribute === "days") {
            store.forEach(day => {
                day.list_tasks.forEach(task => {
                    arrId.push(Number(task.id))
                })
            })
        } 
        else if (nameAttribute === "collections") {
            store.forEach(collection=>{
                arrId.push(Number(collection.id))
            })
        }

        const lastKey = Math.max.apply(Math, arrId);

        return lastKey + 1;
    }



    renameItem(id, newName, nameAttribute) {
        const store = this._getLocalStorageElement(nameAttribute);

        if (nameAttribute === "days") {
            const task = this._searchTask(store, id);
            task.text = newName;
        }

        this._saveStore(nameAttribute, store);
    }

    _searchTask(days, id) {
        let searchTask = null
        days.forEach(day => {
            day.list_tasks.forEach(task => {
                if (task.id === id) {
                    searchTask = task;
                }
            })
        })
        return searchTask;
    }

    _saveStore(nameAttribute, store) {
        localStorage.setItem(nameAttribute, JSON.stringify(store));
    }
    /* loadKeyById ( id ) {
        return JSON.parse( window.localStorage.keys ).find( item => item.id === id )
    } */
}
