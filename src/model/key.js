export function createListKey(data) {
    const elementDom = document.querySelector('.key-list');
    const listKey = [];
    const keys = JSON.parse(data.key);

    for (let key in keys) {
        listKey[key] = keys[key];
    }

    listKey.forEach(item => {
        const itemKey = document.createElement("li");
        itemKey.innerHTML = `${item.image} ${item.text}`;
        itemKey.classList.add('key_item');
        elementDom.append(itemKey);
    })


}