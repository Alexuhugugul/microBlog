import replaceUrl from '../utils/replaceUrl';

export function creatorCollection(instance) {
    const formCollection = document.querySelector(".collection-body");
    const url = window.location.search;
    const date = replaceUrl(url, /[?page=]/g);



    if (formCollection.addEventListener) {
        formCollection.addEventListener("submit", submit, false);
    } else if (formCollection.attachEvent) {
        formCollection.attachEvent('onsubmit', submit);
    }

    function submit(event) {
        event.preventDefault();
        const name = formCollection.querySelector(".create-text").value
        instance.setNewCollection(date, name)
        window.history.back();
    }
}