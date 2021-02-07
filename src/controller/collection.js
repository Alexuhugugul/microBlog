import ViewCollections from '../view/collection';
import Collection from '../models/Collection';


export function actionCollections() {
    const view = new ViewCollections();
    const model = Collection.findAll();

    view.createCollectionsPage(model);

}

export function actionDeleteCollection(id) {
console.log(id)
}