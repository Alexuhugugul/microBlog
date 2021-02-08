import ViewCreatorTask from '../view/creatorTask';

import Key from '../models/Key';
import Day from '../models/Day';



export function actionCreatorTaskPage() {
    const modelKey = Key.findAll();
    const view = new ViewCreatorTask();

    view.createCreatorTask(modelKey);
}


export function actionSetNewTask(newTask) {
    Day.set(newTask);
}