import storeManager from '../StoreManager';

export default class Model {
    id = null;

    static getAll() {
        return storeManager.getAll(this._nameAttribute);
    }

    setAttribute(key, value) {
        this[key] = value;
    }

    save() {
        storeManager.save(this, this.constructor._nameAttribute)
    }

    deleteById() {
        storeManager.deleteById(this, this.constructor._nameAttribute)
    }

    static getById(id) {
        return storeManager.getById(id, this._nameAttribute);
    }
}

