import creastorCalendar from '../utils/creastorCalendar';
import replaceUrl from '../utils/replaceUrl';
import { hide, show } from '../utils/showAndHideElement';
import { actionDeleteCollection, actionSaveCollection } from '../controller/collection';

const hash = window.location.search;
const selectedMonthAndYear = replaceUrl(hash, /[?page=,.html]/g);
let collectionsData = null;

export default class ViewCollections {


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
            if (collectionForSelectedDate) {
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

                // htmldayssAndIcons.push(daysAndIcon)
                this.processEvent(blockCollection);
            }

        })

    }

    processEvent(blockCollection) {

        const fieldNameCollection = blockCollection.querySelector("p");
        const edit = blockCollection.querySelector(".days-edit");
        const deleteCollection = blockCollection.querySelector(".days-delete");
        const input = blockCollection.querySelector(".days-edit-title");
        const save = blockCollection.querySelector(".days-title-save");
        const cellsdays = blockCollection.querySelectorAll("td");
        const days = blockCollection.querySelector(".days-item");

        deleteCollection.addEventListener("click", _deletedays);
        edit.addEventListener("click", _renameCollection);
        save.addEventListener("click", _saveNewName);
        cellsdays.forEach(cell => cell.addEventListener("click", _selectedDate));

        function _deletedays() {

            const classIdCollection = days.classList[1];
            const idCollection = classIdCollection.replace("day_", "");
            const valueByDelete = collectionsData.find(collection => collection.id === Number(idCollection));
            actionDeleteCollection(valueByDelete);

            hide(fieldNameCollection);
            hide(edit);
            hide(deleteCollection);
            hide(days);


        }

        function _renameCollection() {
            const oldName = fieldNameCollection.textContent;

            input.value = oldName;

            show(save);
            show(input);
            hide(edit);
            hide(deleteCollection);
            hide(fieldNameCollection);
        }

        function _saveNewName(event) {
            const name = input.value;
            const classIdCollection = days.classList[1];
            const idCollection = classIdCollection.replace("day_", "");
            const valueByRename = collectionsData.find(collection => collection.id === Number(idCollection));

            fieldNameCollection.textContent = input.value;

            hide(save);
            hide(input);
            show(edit);
            show(deleteCollection);
            show(fieldNameCollection);

            valueByRename["name"] = name;

            actionSaveCollection(valueByRename);

        }

        function _selectedDate(event) {
            const parent = event.target.parentNode.parentNode.parentNode.parentNode;
            const element = event.target;
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


}







