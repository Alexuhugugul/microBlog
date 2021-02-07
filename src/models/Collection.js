import Model from './Model';

export default class Collection extends Model{
    id = null;
    date = null;
    name=null;
    select_date = [];
    static _nameAttribute = 'collections';


    setAttribute(key, value) {
        this[key] = value;
    }

    static findAll() {

        const rawKeys = super.getDataByNameAttribute()
        const keys = []

        for (let rawKey of rawKeys) {
            const key = new this()  

            key.setAttribute('id', rawKey.id);
            key.setAttribute('date', rawKey.date);
            key.setAttribute('name', rawKey.name);
            key.setAttribute('select_date', rawKey.select_date);

            keys.push(key)
        }

        return keys
    }
}