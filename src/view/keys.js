export default class viewKeysPage {
    constructor() { }

    createListKeys(keys) {
        const listKeys = document.querySelector('.key-list');
        const arrKeys = [];

        for (let key in keys) {
            arrKeys[key] = keys[key];
        }

        arrKeys.forEach(item => {
            const itemKey = document.createElement("li");
            itemKey.innerHTML = `${item.image} ${item.text}`;
            itemKey.classList.add('key_item');
            listKeys.append(itemKey);
        })
    }

}