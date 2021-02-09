import Key from '../models/Key';
import Day from '../models/Day';
import ViewPlanFuture from '../view/planFuture';
import Task from '../models/Task';


export function actionPlanFuture() {
    const modelKey = Key.findAll();
    const modelTask = Task.findAll();

    const view = new ViewPlanFuture();

    view.createListTasksPlanFuture(modelKey, modelTask);
}

export function actionDeleteTask(value) {
    const day = new Task();
  
    day.setAttribute('id', value.id);
    day.setAttribute('date', value.date);
    day.setAttribute('text', value.text);
    day.setAttribute('type', value.type);

    day.deleteById();
}

export function actionUpdateTask(value){
    const day =new Task();
  
    day.setAttribute('id', value.id);
    day.setAttribute('date', value.date);
    day.setAttribute('text', value.text);
    day.setAttribute('type', value.type);


    day.save();
}