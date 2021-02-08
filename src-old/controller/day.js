import Key from '../models/Key';
import Day from '../models/Day';
import ViewDayPage from '../view/day';


export function actionDayPage() {
    const modelKey = Key.findAll();
    const modelDay = Day.findAll();

    const view = new ViewDayPage();

    view.createTasksListDay(modelKey, modelDay);
}

export function actionDeleteTask(id) {
    Day.delete(id);
}

export function actionRenameTask(id,newName){
    Day.rename(id,newName)
}