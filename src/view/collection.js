import creastorCalendar from '../utils/creastorCalendar';
import replaceUrl from '../utils/replaceUrl';
import { hide, show } from '../utils/showAndHideElement';
import instanceStoreManager from '../StoreManager';
import { actionDeleteCollection, actionSaveCollection } from '../controller/collection';
import { collections } from '../adapters/data';

const hash = window.location.search;
const selectedMonthAndYear = replaceUrl(hash, /[?page=,.html]/g);
let collectionsData = null;
export default class ViewCollections {

    constructor() { }



    createCollectionsPage(store) {
        const htmldayssAndIcons = [];
        collectionsData = store;
        const bodyPage = document.querySelector(".collections-body");
        const buttonCreateCollection = document.querySelector(".collections-button");

        buttonCreateCollection.href = `/pages/creatorCollection?page=${selectedMonthAndYear}`;

        collectionsData.forEach(collection => {

            const dateCreateCollection = collection.select_date;
            const nameCollection = document.createElement("h3");
            const inputForRename = document.createElement("input");
            const daysOnMonth = document.createElement("table");
            const iconDeletedays = document.createElement("img");
            const iconRenamedays = document.createElement("img");
            const iconSavedaysName = document.createElement("img");
            const blockCollection = document.createElement("div");
            const collectionForSelectedDate = collection.date === selectedMonthAndYear;

            daysOnMonth.classList.add("days-item");
            daysOnMonth.classList.add(`day_${collection.id}`);
            nameCollection.classList.add('days-item_title');
            iconSavedaysName.classList = "days-title-save";
            iconDeletedays.classList = "days-delete"
            iconRenamedays.classList = "days-edit";
            blockCollection.classList = "days-block";
            inputForRename.classList = "days-edit-title";

            iconDeletedays.src = "../src/asset/images/close-black.svg";
            iconRenamedays.src = "../src/asset/images/create-black.svg";
            iconSavedaysName.src = "../src/asset/images/save-black.svg";

            daysOnMonth.innerHTML = `<thead><tr><td colspan="4"><td colspan="3"><tr><td>Пн<td>Вт<td>Ср<td>Чт<td>Пт<td>Сб<td>Вс<tbody class="days-date">`;
            nameCollection.innerHTML = `<p>${collection.name}</p>`;

            bodyPage.append(blockCollection);

            hide(iconSavedaysName);
            hide(inputForRename);

            if (collectionForSelectedDate) {

                nameCollection.append(iconRenamedays);
                nameCollection.append(iconDeletedays);
                blockCollection.append(nameCollection);
                blockCollection.append(inputForRename);
                blockCollection.append(iconSavedaysName);
                blockCollection.append(daysOnMonth);

                creastorCalendar(daysOnMonth, dateCreateCollection, false);

                const daysAndIcon = {
                    "daysOnMonth": daysOnMonth,
                    "iconDeletedays": iconDeletedays,
                    "iconRenamedays": iconRenamedays,
                    "iconSavedaysName": iconSavedaysName
                }

                htmldayssAndIcons.push(daysAndIcon)
            }
        })

        this.processEvent(htmldayssAndIcons);
    }

    processEvent(HTMLCollection) {

        HTMLCollection.forEach(element => {

            const bodydays = element.daysOnMonth.querySelector(".days-date");
            const cellsdays = bodydays.querySelectorAll("td");

            element.iconDeletedays.addEventListener("click", this._deletedays);
            element.iconRenamedays.addEventListener("click", this._renamedays);
            element.iconSavedaysName.addEventListener("click", this._saveNewName);
            cellsdays.forEach(cell => cell.addEventListener("click", this._selectedDate));

        })
    }

    _deletedays(event) {

        const elementParent = event.target.parentNode.parentNode;
        const days = elementParent.querySelector(".days-item");
        const elementNameCollection = event.target.parentNode;
        const nameCollection = elementNameCollection.textContent;
        const classIdCollection = days.classList[1];
        const idCollection = classIdCollection.replace("day_", "")
        const valueByDelete = collectionsData.find(collection => collection.id === Number(idCollection));

        elementNameCollection.remove();
        days.remove();

        actionDeleteCollection(valueByDelete);

    }

    _renamedays(event) {
        const elementNameCollection = event.target.parentNode;
        const oldName = elementNameCollection.textContent;
        const elementParent = event.target.parentNode.parentNode;
        const iconSave = elementParent.querySelector(".days-title-save");
        const input = elementParent.querySelector(".days-edit-title");

        input.value = oldName;

        show(iconSave);
        show(input);
        hide(elementNameCollection);
    }

    _saveNewName(event) {
        const save = event.target;
        const parent = event.target.parentNode;
        const days = parent.querySelector(".days-item");
        const title = parent.querySelector(".days-item_title");
        const titleText = title.querySelector("p");
        const oldName = titleText.textContent;
        const input = parent.querySelector(".days-edit-title");
        const name = input.value;
        const classIdCollection = days.classList[1];
        const idCollection = classIdCollection.replace("day_", "");
        const valueByRename = collectionsData.find(collection => collection.id === Number(idCollection));

        titleText.textContent = input.value;

        hide(save);
        hide(input);
        show(title);
        valueByRename["name"] = name;

        actionSaveCollection(valueByRename);

    }

    _selectedDate(event) {
        const element = event.target;
        const parent = event.target.parentNode.parentNode.parentNode.parentNode;
        const nameCollection = parent.querySelector("p").textContent;
        const date = element.textContent + '_' + selectedMonthAndYear;
        const table = parent.querySelector(".days-item");
        const classIdTable = table.classList[1];
        const classNames = element.classList;
        const id = classIdTable.replace("day_", "");
        const selectDate = collectionsData.find(collection => collection.id === Number(id));
        const newCollection = selectDate.select_date;
        if (!classNames[0]) {
            classNames.add("days-select-date");
            newCollection.push({ date, "id": null });

        } else {
            classNames.remove("days-select-date");
            selectDate.select_date = newCollection.filter(el => date !== el.date);

        }
        actionSaveCollection(selectDate);
    }
}







