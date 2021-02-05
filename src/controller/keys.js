import KeysPage from '../model/keys';
import viewKeysPage from '../view/keys';


export default function actionKeysPage(instanceStore) {
    const model = new KeysPage();
    const view=new viewKeysPage();
    const dataStore = model.getDataKeys();
    view.createListKeys(dataStore);
}

