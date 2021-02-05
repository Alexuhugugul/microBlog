import Collections from '../model/collection';


export function actionCollections(instanceStore) {
    const collections = new Collections();

    const store = collections.getStore();
    const htmlCollections = collections.createCollectionsPage(store);
    collections.processEvent(htmlCollections);
    console.log(collections)
}