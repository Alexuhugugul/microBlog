import { days, collections, keys, tasksForMonth, taskForYear } from './data';

export default class localStorageManager {

    constructor() {
        this.initLocalStorage();
    }

    initLocalStorage() {
        if (!localStorage.days) {
            window.localStorage.setItem("days", JSON.stringify(days));

        }
        if (!localStorage.collections) {
            window.localStorage.setItem("collections", JSON.stringify(collections));

        }
        if (!localStorage.keys) {
            window.localStorage.setItem("keys", JSON.stringify(keys));
        }
        if (!localStorage.tasksForMonth) {
            window.localStorage.setItem("tasksForMonth", JSON.stringify(tasksForMonth));
        }
        if (!localStorage.taskForYear) {
            window.localStorage.setItem("taskForYear", JSON.stringify(taskForYear));

        }

    }

    save(value, nameTable) {
        const checkAvailabilityId = !!value.id;
        const store = this.getAll(nameTable);
        if (checkAvailabilityId) {
            const oldValue = store.find(elem => elem.id === value.id);

            for (let item in oldValue) {
                if (typeof value[item] === "object") {
                    console.log(value)
                    value[item] = this._nestedData(oldValue[item], value[item]);
                }
                oldValue[item] = value[item];

            }
        }
        else {
            const lastId = this._getLastId(store);
            value["id"] = lastId;
            store.push(value);
        }

        this._saveStore(nameTable, store);
    }

    deleteById(value, nameTable) {
        const strData = window.localStorage.getItem(nameTable);
        const dataAll = JSON.parse(strData);
        const foundData = dataAll.filter(elem => elem.id !== value.id);

        this._saveStore(nameTable, foundData);
    }

    getById(id, nameTable) {
        console.log(id, nameTable)
        const strData = window.localStorage.getItem(nameTable);
        const dataAll = JSON.parse(strData);
        const foundData = dataAll.find(value => value.id === id);

        return foundData;
    }

    getAll(nameTable) {
        const strData = window.localStorage.getItem(nameTable);
        const dataAll = JSON.parse(strData);

        return dataAll;
    }

    _nestedData(oldData, newData) {
        const lastId = this._getLastId(oldData);
        newData.forEach(data => {
            if (!data["id"]) {
                data["id"] = lastId;
            }
        })

        return newData;
    }

    _saveStore(nameTable, store) {
        localStorage.setItem(nameTable, JSON.stringify(store));
    }

    _getLastId(store) {
        const arrId = [];

        store.forEach(day => {
            arrId.push(Number(day.id))
        })

        const lastId = Math.max.apply(Math, arrId);

        return lastId + 1;
    }
}
