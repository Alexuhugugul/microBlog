import localStorageManager from './interfaces/localStorageManager';

// class StoreManager {
//     constructor() {
//         this.bd = null;
//         this.initBD();
//     }

//     initBD() {
//         this.bd = new localStorageManager;
//         this.bd.setItem();
//     }

//     viewData() {
//         this.bd.consoleView();
//     }

//     getItem(id) {
//         return this.bd.getItem(id)
//     }

//     getAllItem() {
//         return this.bd.getAllItem()
//     }

//     getDataCalendars(){
//         return this.bd.getDataCalendars();
//     }

//     getDataKeys(){
//         return this.bd.getDataKeys();
//     }

//     loadKeyById ( id ) {
//         return this.bd.loadKeyById();
//     }

//     getDataCollections(){
//         return this.bd.getDataCollections();
//     }

//     setCalendar(value) {
//         return this.bd.setItemCalendar(value);
//     }

//     setTask(date,text,oldText){
//         return this.bd.setItemTask(date,text,oldText);
//     }

//     deleteTask(date,text){
//         return this.bd.deleteItemTask(date,text)
//     }
//     setDateInCollections(date,name,selectedDate){
//         return this.bd.setDateInCollections(date,name,selectedDate)
//     }
//     deleteDateInCollections(date,name,selectedDate){
//         return this.bd.deleteDateInCollections(date,name,selectedDate)
//     }
//     setNewCollection(date,name){
//         return this.bd.setNewCollection(date,name)
//     }
//     deleteCollection(date,name){
//         return this.bd.deleteCollection(date,name)
//     }

//     renameCollection(date,name,oldName){
//         return this.bd.renameCollection(date,name,oldName)
//     }
// }

// const storeManager = new StoreManager();

const storeManager = new localStorageManager();
export default storeManager;