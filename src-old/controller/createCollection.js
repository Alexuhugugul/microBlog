import ViewCreatorCollection from '../view/creatorCollection';

import Key from '../models/Key';
import Day from '../models/Day';
import Collection from '../models/Collection';


export function actionCreateCollectionsPage() {
    const view = new ViewCreatorCollection();

    view.creatorCollection();
}


export function actionSetNewCollection(value) {
  return Collection.set(value)
}