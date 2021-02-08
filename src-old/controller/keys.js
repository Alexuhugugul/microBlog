import Key from '../models/Key';
import ViewKeysPage from '../view/keys';


export default function actionKeysPage() {
    const models = Key.findAll();
    const view = new ViewKeysPage();

    view.createListKeys(models);
}

