import storeManager from '../StoreManager';

export default class MainPage {
    constructor() { }

    getDataCalendars() {
        return storeManager.getDataCalendars();
    }
}