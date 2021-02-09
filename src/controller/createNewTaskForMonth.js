import ViewCreatorTasksForMonth from '../view/createNewTaskForMonth';
import TaskForMonth from '../models/TaskForMonth';
import Key from '../models/Key';


export  function actionCreateTasksForMonth() {
    const view = new ViewCreatorTasksForMonth();
    const modelsTasks = TaskForMonth.findAll();
    const modelsKeys = Key.findAll();

    view.createTaskForMonth(modelsTasks,modelsKeys);
}



export function actionAddTaskForMonth(value) {
    const task = new TaskForMonth();

    task.setAttribute('id', value.id);
    task.setAttribute('date', value.date);
    task.setAttribute('text', value.text);
    task.setAttribute('type', value.type);

    task.save();
}