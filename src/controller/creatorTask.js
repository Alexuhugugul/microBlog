import ViewCreatorTask from '../view/creatorTask';

import Key from '../models/Key';
import Day from '../models/Day';



export function actionCreatorTaskPage() {
    const modelsKey = Key.findAll();
    const days = Day.findAll();
    const view = new ViewCreatorTask();

    view.createCreatorTask(modelsKey, days);
}


export function actionSetNewTask(newTask) {
    const day = new Day();

    day.setAttribute('id', newTask.id);
    day.setAttribute('date', newTask.date);
    day.setAttribute('list_tasks', newTask.list_tasks);

    day.save();

}