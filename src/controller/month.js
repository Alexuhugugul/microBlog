import { createMonth } from '../model/month';


export function actionMonth(instanceStore) {
    createMonth(instanceStore.getAllItem())
}