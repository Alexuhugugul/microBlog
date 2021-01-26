const buttonDropdownMonth = document.querySelector(".main-dropdown_button");
const buttonDropdownCollections = document.querySelector(".month-button_collections");
const listButtonMonths = document.querySelector(".main-dropdown_list");
const listButtonCollections = document.querySelector(".month-dropdown_list");

if (buttonDropdownMonth) {
    buttonDropdownMonth.onclick = function () {
        if (listButtonMonths.style.display !== "flex") {
            listButtonMonths.style.display = "flex";
        } else {
            listButtonMonths.style.display = "none";
        }
    }
}

if (buttonDropdownCollections) {
    buttonDropdownCollections.onclick = function () {
        if (listButtonCollections.style.display !== "flex") {
            listButtonCollections.style.display = "flex";
        } else {
            listButtonCollections.style.display = "none";
        }
    }
}