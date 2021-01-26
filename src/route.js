import { actionCalendar } from './controller/main.js';
import { actionKey } from './controller/key.js';
import { actionMonth } from './controller/month.js';
import { actionCollections } from './controller/collection.js';
import { actionDay } from './controller/day.js';
import { actionCreatorTask } from './controller/creatorTask.js';
import {actionCreateCollections} from './controller/createCollection.js';

export function route(instance) {
    const url = window.location

    switch (url.pathname) {
        case "/view/main.html":
            actionCalendar(instance)
            break;
        case "/view/key.html":
            actionKey(instance)
            break;
        case "/view/month":
            actionMonth(instance)
            break;
        case "/view/collection":
            actionCollections(instance)
            break;
        case "/view/day":
            actionDay(instance)
            break;
        case "/view/creatorTask":
            actionCreatorTask(instance)
            break;
        case "/view/creatorCollection":
            actionCreateCollections(instance)
            break;
        default:
            console.log('route /');
    }
}