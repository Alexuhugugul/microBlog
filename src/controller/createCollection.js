import ViewCreatorCollection from '../view/creatorCollection';

import Key from '../models/Key';
import Day from '../models/Day';
import Collection from '../models/Collection';
import { collections } from '../adapters/data';


export function actionCreateCollectionsPage() {
    const view = new ViewCreatorCollection();

    view.creatorCollection();
}


export function actionSetNewCollection(newCollection) {
  const collection = new Collection();

  collection.setAttribute('id', newCollection.id);
  collection.setAttribute('date', newCollection.date);
  collection.setAttribute('name', newCollection.name);

  collection.save();
}