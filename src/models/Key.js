import Model from './Model';

export default class Key extends Model {

    image = null;
    text = null;
    type = null;
    static _nameAttribute = 'keys';

    static findAll() {

        const rawKeys = super.getAll() ?? [];
        const keys = []

        for (let rawKey of rawKeys) {
            const key = new Key(1)

            key.setAttribute('id', rawKey.id);
            key.setAttribute('image', rawKey.image);
            key.setAttribute('text', rawKey.text);
            key.setAttribute('type', rawKey.type);

            keys.push(key)
        }

        return keys
    }
}
