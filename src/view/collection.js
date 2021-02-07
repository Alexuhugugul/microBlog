import { calendar } from '../utils/calendar';
import replaceUrl from '../utils/replaceUrl';
import { hide, show } from '../utils/showAndHideElement';
import instanceStoreManager from '../StoreManager';
import { actionDeleteCollection } from '../controller/collection';

const hash = window.location.search;
const selectedMonthAndYear = replaceUrl(hash, /[?page=,.html]/g);

export default class ViewCollections {

    constructor() { }



    createCollectionsPage(store) {
        const htmlCalendarsAndIcons = [];
        const collectionsData = store;
        const bodyPage = document.querySelector(".collections-body");
        const buttonCreateCollection = document.querySelector(".collections-button");

        buttonCreateCollection.href = `/pages/creatorCollection?page=${selectedMonthAndYear}`;

        collectionsData.forEach(collection => {

            const dateCreateCollection = collection.select_date;
            const nameCollection = document.createElement("h3");
            const inputForRename = document.createElement("input");
            const calendarOnMonth = document.createElement("table");
            const iconDeleteCalendar = document.createElement("img");
            const iconRenameCalendar = document.createElement("img");
            const iconSaveCalendarName = document.createElement("img");
            const blockCollection = document.createElement("div");
            const collectionForSelectedDate = collection.date === selectedMonthAndYear;

            calendarOnMonth.classList.add("calendar-item");
            nameCollection.classList.add('calendar-item_title');
            iconSaveCalendarName.classList = "calendar-title-save";
            iconDeleteCalendar.classList = "calendar-delete"
            iconRenameCalendar.classList = "calendar-edit";
            blockCollection.classList = "calendar-block";
            inputForRename.classList = "calendar-edit-title";

            iconDeleteCalendar.src = "../src/asset/images/close-black.svg";
            iconRenameCalendar.src = "../src/asset/images/create-black.svg";
            iconSaveCalendarName.src = "../src/asset/images/save-black.svg";

            calendarOnMonth.innerHTML = `<thead><tr><td colspan="4"><td colspan="3"><tr><td>Пн<td>Вт<td>Ср<td>Чт<td>Пт<td>Сб<td>Вс<tbody class="calendar-date">`;
            nameCollection.innerHTML = `<p>${collection.name}</p>`;

            bodyPage.append(blockCollection);

            hide(iconSaveCalendarName);
            hide(inputForRename);

            if (collectionForSelectedDate) {

                nameCollection.append(iconRenameCalendar);
                nameCollection.append(iconDeleteCalendar);
                blockCollection.append(nameCollection);
                blockCollection.append(inputForRename);
                blockCollection.append(iconSaveCalendarName);
                blockCollection.append(calendarOnMonth);

                calendar(calendarOnMonth, dateCreateCollection, false);

                const calendarAndIcon = {
                    "calendarOnMonth": calendarOnMonth,
                    "iconDeleteCalendar": iconDeleteCalendar,
                    "iconRenameCalendar": iconRenameCalendar,
                    "iconSaveCalendarName": iconSaveCalendarName
                }

                htmlCalendarsAndIcons.push(calendarAndIcon)
            }
        })

        this.processEvent(htmlCalendarsAndIcons);
    }

    processEvent(HTMLCollection) {

        HTMLCollection.forEach(element => {

            const bodyCalendar = element.calendarOnMonth.querySelector(".calendar-date");
            const cellsCalendar = bodyCalendar.querySelectorAll("td");

            element.iconDeleteCalendar.addEventListener("click", this._deleteCalendar);
            element.iconRenameCalendar.addEventListener("click", this._renameCalendar);
            element.iconSaveCalendarName.addEventListener("click", this._saveNewName);
            cellsCalendar.forEach(cell => cell.addEventListener("click", this._selectedDate));

        })
    }

    _deleteCalendar(event) {

        const elementParent = event.target.parentNode.parentNode;
        const calendar = elementParent.querySelector(".calendar-item");
        const elementNameCollection = event.target.parentNode;
        const nameCollection = elementNameCollection.textContent;

        elementNameCollection.remove();
        calendar.remove();

        actionDeleteCollection(selectedMonthAndYear, nameCollection);

    }

    _renameCalendar(event) {
        const elementNameCollection = event.target.parentNode;
        const oldName = elementNameCollection.textContent;
        const elementParent = event.target.parentNode.parentNode;
        const iconSave = elementParent.querySelector(".calendar-title-save");
        const input = elementParent.querySelector(".calendar-edit-title");

        input.value = oldName;

        show(iconSave);
        show(input);
        hide(elementNameCollection);
    }

    _saveNewName(event) {
        const save = event.target;
        const parent = event.target.parentNode;
        const title = parent.querySelector(".calendar-item_title");
        const titleText = title.querySelector("p");
        const oldName = titleText.textContent;
        const input = parent.querySelector(".calendar-edit-title");
        const name = input.value;
        titleText.textContent = input.value;

        hide(save);
        hide(input);
        show(title);

        instanceStoreManager.renameCollection(selectedMonthAndYear, name, oldName);
    }

    _selectedDate(event) {
        const element = event.target;
        const parent = event.target.parentNode.parentNode.parentNode.parentNode;
        const nameCollection = parent.querySelector("p").textContent;
        const date = element.textContent + '_' + selectedMonthAndYear;
        const classNames = element.classList;

        if (!classNames[0]) {
            classNames.add("calendar-select-date");
            instanceStoreManager.setDateInCollections(selectedMonthAndYear, nameCollection, date);
        } else {
            classNames.remove("calendar-select-date");
            instanceStoreManager.deleteDateInCollections(selectedMonthAndYear, nameCollection, date);
        }
    }
}







