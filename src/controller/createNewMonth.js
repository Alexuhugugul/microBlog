import ViewCreatorMonth from '../view/createNewMonth';
import Day from '../models/Day';



export function actionCreateMonth() {
    const view = new ViewCreatorMonth();
    const models=Day.findAll();

    view.creatorMonth(models);
}


export function actionSetNewMonth(value) {
  const day = new Day();
  
  day.setAttribute('date', value);

  day.save();
}