import Day from '../models/Day';
import Collection from '../models/Collection';
import viewMonth from '../view/month';


export default function actionMonthPage() {
    const view = new viewMonth();
    const modelDay = Day.findAll();
    const modelCollection = Collection.findAll();

    view.createMonth(modelDay, modelCollection);

}