import { createListKey } from '../model/key';


export function actionKey(instanceStore) {
    createListKey(instanceStore.getAllItem())
}