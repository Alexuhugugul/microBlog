import { createListCalendar } from '../model/main.js';


export function actionCalendar(instanceStore) {
    createListCalendar(instanceStore.getAllItem())
}