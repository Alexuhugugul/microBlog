import Model from './Model';

export default class TaskForMonth extends Model {

    date = null;
    text = null;
    type = null;
    static _nameAttribute = 'tasksForMonth';


    static findAll() {

        const rawKeys = super.getAll() ?? [];
        const keys = []

        for (let rawKey of rawKeys) {
            const key = new this()

            key.setAttribute('id', rawKey.id);
            key.setAttribute('date', rawKey.date);
            key.setAttribute('text', rawKey.text);
            key.setAttribute('type', rawKey.type);

            keys.push(key)
        }

        return keys
    }


}


