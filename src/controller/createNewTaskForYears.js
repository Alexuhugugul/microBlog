import ViewCreatorTasksForMonth from '../view/createTasksForYears';
import Task from '../models/Task';
import Key from '../models/Key';


export  function actionCreateTasksForYears() {
    const view = new ViewCreatorTasksForMonth();
    const modelsTasks = Task.findAll();
    const modelsKeys = Key.findAll();

    view.createTaskForYears(modelsTasks,modelsKeys);
}



export function actionAddTaskForYears(value) {
    const task = new Task();

    task.setAttribute('id', value.id);
    task.setAttribute('date', value.date);
    task.setAttribute('text', value.text);
    task.setAttribute('type', value.type);

    task.save();
}