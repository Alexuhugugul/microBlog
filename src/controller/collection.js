import ViewCollections from '../view/collection';
import Collection from '../models/Collection';
import { collections } from '../adapters/data';


export function actionCollections() {
    const view = new ViewCollections();
    const model = Collection.findAll();

    view.createCollectionsPage(model);

}

export function actionDeleteCollection(value) {

    const collection = new Collection();

    collection.setAttribute('id', value.id);
    collection.setAttribute('date', value.date);
    collection.setAttribute('name', value.name);
    collection.setAttribute('select_date', value.select_date);

    collection.deleteById();

}

export function actionSaveCollection(value) {

    const collection = new Collection();

    collection.setAttribute('id', value.id);
    collection.setAttribute('date', value.date);
    collection.setAttribute('name', value.name);
    collection.setAttribute('select_date', value.select_date);

    collection.save();

}