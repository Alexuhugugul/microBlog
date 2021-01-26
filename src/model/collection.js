import { calendar } from '../utils/calendar';
import timestampToStr from '../utils/timestampToStr';
import replaceUrl from '../utils/replaceUrl';
const hash = window.location.search;
const strDateUrl = replaceUrl(hash, /[?page=,.html]/g);

export function createCollectionPage(instanceStore) {
    const data = instanceStore.getAllItem()
    const elementDOMCollections = document.querySelector(".collections-body");
    const buttonCreateCollection=document.querySelector(".collections-button");
    console.log(buttonCreateCollection)
    buttonCreateCollection.href=`/view/creatorCollection?page=${strDateUrl}`
    const collections = JSON.parse(data.collections);

    collections.forEach(collection => {

        if (collection.date === strDateUrl) {
            const collectionItem = document.createElement("h3");
            const calendarCollection = document.createElement("table");
            calendarCollection.innerHTML =
                `<thead>
        <tr>
        <td colspan="4">
        <td colspan="3">
        <tr >
        <td>Пн
        <td>Вт
        <td>Ср
        <td>Чт
        <td>Пт
        <td>Сб
        <td>Вс
        <tbody class="calendar-date">`;
            collectionItem.innerHTML = `${collection.name}`;

            calendarCollection.classList.add('calendar-item');
            collectionItem.classList.add('calendar-item_title');
            elementDOMCollections.append(collectionItem);
            const selectedDates = collection.select_date;
            elementDOMCollections.append(calendarCollection);
            calendar(calendarCollection, selectedDates, false);
            const trCalendars = document.querySelectorAll(".calendar-date");
            trCalendars.forEach(trCalendar => {

                const tdElems = trCalendar.querySelectorAll("td");
                tdElems.forEach(tdElem => {
                    tdElem.addEventListener("click", selectedDate)
                })

            })


        }


    })



    function selectedDate(event) {
        const element = event.target;
        const nameCollection = element.parentNode.parentNode.parentNode.previousElementSibling.textContent;
        const date = element.textContent + '_' + strDateUrl

        if (!element.classList[0]) {
            element.classList.add("calendar-select-date")
            instanceStore.setDateInCollections(strDateUrl, nameCollection, date)
        } else {
            element.classList.remove("calendar-select-date")
            instanceStore.deleteDateInCollections(strDateUrl, nameCollection, date)
        }
    }
}

