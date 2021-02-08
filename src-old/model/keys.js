import storeManager from '../StoreManager';

export default class KeysPage {
    constructor() { }

    getDataKeys() {
        return storeManager.getDataKeys();
    }
}