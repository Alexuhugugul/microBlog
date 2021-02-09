import Key from '../models/Key';
import Day from '../models/Day';
import ViewDayPage from '../view/day';


export function actionDayPage() {
    const modelKey = Key.findAll();
    const modelDay = Day.findAll();

    const view = new ViewDayPage();

    view.createTasksListDay(modelKey, modelDay);
}

export function actionDeleteTask(value) {
    const day = new Day();
  
    day.setAttribute('id', value.id);
    day.setAttribute('date', value.date);
    day.setAttribute('list_tasks', value.list_tasks);

    day.deleteById();
}

export function actionUpdateDay(value){
    const day =new Day();
  
    day.setAttribute('id', value.id);
    day.setAttribute('date', value.date);
    day.setAttribute('list_tasks', value.list_tasks);

    day.save();
}