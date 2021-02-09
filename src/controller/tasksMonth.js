import ViewTasksForMonth from '../view/tasksForMonth';
import TaskForMonth from '../models/TaskForMonth';
import Key from '../models/Key';


export  function actionTasksMonth() {
    const view = new ViewTasksForMonth();
    const modelsTasks = TaskForMonth.findAll();
    const modelsKeys = Key.findAll();

    view.createListTasksForMonth(modelsTasks,modelsKeys);
}

export function actionDeleteTaskForMonth(value) {
    const task = new TaskForMonth();

    task.setAttribute('id', value.id);
    task.setAttribute('date', value.date);
    task.setAttribute('text', value.text);
    task.setAttribute('type', value.type);

    task.deleteById();
}

export function actionUpdateTaskForMonth(value) {
    const task = new TaskForMonth();

    task.setAttribute('id', value.id);
    task.setAttribute('date', value.date);
    task.setAttribute('text', value.text);
    task.setAttribute('type', value.type);

    task.save();
}