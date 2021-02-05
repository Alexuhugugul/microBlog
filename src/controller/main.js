import MainPage from '../model/main.js';
import viewMainPage from '../view/main.js'


export default function actionMainPage() {
    const model = new MainPage();
    const view = new viewMainPage();
    const dataStore = model.getDataCalendars();

    view.createListMonths(dataStore);

}