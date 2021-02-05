import viewMonth from '../view/month';
import MonthPage from '../model/month.js';


export default function actionMonthPage(instanceStore) {
    const view = new viewMonth();
    const model = new MonthPage();
    const listCalendars = model.getDataCalendars();
    const listCollections = model.getDataCollections();
    
    view.createMonth(listCalendars,listCollections);

}