import storeManager from '../StoreManager';

export default class MonthPage {
    constructor() { }

    getDataCalendars() {
        return storeManager.getDataCalendars();
    }

    getDataCollections() {
        return storeManager.getDataCollections();
    }
}