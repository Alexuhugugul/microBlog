import Model from './Model';

export default class Task extends Model {

    date= null;
    text = null;
    type = null;
    static _nameAttribute = 'taskForYear';

    static findAll() {

        const rawKeys = super.getAll() ?? [];
        const keys = []

        for (let rawKey of rawKeys) {
            const key = new this()

            key.setAttribute('id', rawKey.id);
            key.setAttribute('text', rawKey.text);
            key.setAttribute('type', rawKey.type);
            key.setAttribute('date', rawKey.date);

            keys.push(key)
        }

        return keys
    }
}
