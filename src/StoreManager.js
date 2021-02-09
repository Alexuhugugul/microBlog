import localStorageManager from './adapters/localStorageManager';

class StoreManager {

    constructor() {
        this.db = new localStorageManager;
    }

    save(value,nameTable) {
     return this.db.save(value,nameTable);
    }

    deleteById(id,nameTable){
        return this.db.deleteById(id,nameTable);
    }

    getById(id,nameTable){
        return this.db.getById(id,nameTable);
    }

    getAll(nameTable){
        return this.db.getAll(nameTable);
    }

}

const storeManager = new StoreManager();

export default storeManager;