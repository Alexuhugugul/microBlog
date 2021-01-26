import localStorageManager from './interfaces/localStorageManager';

class StoreManager {
    constructor() {
        this.bd = null;
        this.initBD();
    }

    initBD() {
        this.bd = new localStorageManager;
        this.bd.setItem();
    }

    viewData() {
        this.bd.consoleView();
    }

    getItem(id) {
        return this.bd.getItem(id)
    }

    getAllItem() {
        return this.bd.getAllItem()
    }

    setCalendar(value) {
        return this.bd.setItemCalendar(value);
    }

    setTask(date,text,oldText){
        return this.bd.setItemTask(date,text,oldText);
    }

    deleteTask(date,text){
        return this.bd.deleteItemTask(date,text)
    }
    setDateInCollections(date,name,selectedDate){
        return this.bd.setDateInCollections(date,name,selectedDate)
    }
    deleteDateInCollections(date,name,selectedDate){
        return this.bd.deleteDateInCollections(date,name,selectedDate)
    }
    setNewCollection(date,name){
        return this.bd.setNewCollection(date,name)
    }
}

const storeManager = new StoreManager();

export default storeManager;