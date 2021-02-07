import storeManager from '../StoreManager';

export default class Model {
    id = null;

    static getDataByNameAttribute() {
        return storeManager.getDataByNameAttribute(this._nameAttribute);
    }

    static delete(id) {
        return storeManager.deleteDataById(id, this._nameAttribute)
    }

    static set(object) {
        return storeManager.setNewItem(object, this._nameAttribute)
    }

    static rename(id,newName){
        return storeManager.renameItem(id,newName,this._nameAttribute);
    }
}

