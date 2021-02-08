// const calendar = [
//     {
//         "id": 1,
//         "date": "1610150400000",
//         "list_tasks": [
//             {
//                 "type": 1,
//                 "text": "Помыть посуду"
//             }
//         ]
//     },
//     {
//         "id": 2,
//         "date": "1610236800000",
//         "list_tasks": [
//             {
//                 "type": 2,
//                 "text": "Купить воды"
//             }
//         ]
//     }
// ]
// const collections = [
//     {
//         "id": 1,
//         "name": "Зарядка каждое утро",
//         "select_date": [
//             "09.12.2020",
//             "10.01.2021"
//         ]
//     },
//     {
//         "id": 2,
//         "name": "Сон 8 часов",
//         "select_date": [
//             "11.12.2020",
//             "12.01.2021"
//         ]
//     }
// ]


// export default class indexBDManager {

//     constructor() {
//         this.db = null;
//     }

//     _initBD() {
//         let openRequest = indexedDB.open("db");

//         openRequest.onupgradeneeded = function () {
//             let db = openRequest.result;
//             if (!db.objectStoreNames.contains('calendar')) {
//                 db.createObjectStore('calendar', { keyPath: 'id' }); // создаем хранилище
//             }
//         };


//         openRequest.onerror = function () {
//             console.error("Error", openRequest.error);
//         };

//         openRequest.onsuccess = function () {
//             this.db = openRequest.result;
//             console.log(openRequest.result)
//             // продолжить работу с базой данных, используя объект db
//         };
//     }

//     setItem() {
//         this._initBD()
//         /*  calendar.forEach(task => {
//              window.localStorage.setItem(task.id, JSON.stringify(task));
//          }) */
//     }

//     getItem(id) {
//         window.localStorage.getItem(id)
//     }

//     removeItem(id) {
//         window.localStorage.removeItem(id)
//     }

//     consoleView() {
//         console.log(this.db)
//     }
// }
