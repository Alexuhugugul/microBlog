import actionMainPage from './controller/main.js';
import actionKeysPage from './controller/keys.js';
import actionMonthPage from './controller/month.js';
import { actionCollections } from './controller/collection.js';
import { actionDay } from './controller/day.js';
import { actionCreatorTask } from './controller/creatorTask.js';
import {actionCreateCollections} from './controller/createCollection.js';

export function route(instance) {
    const url = window.location

    switch (url.pathname) {
        case "/pages/main.html":
            actionMainPage(instance)
            break;
        case "/pages/keys.html":
            actionKeysPage(instance)
            break;
        case "/pages/month":
            actionMonthPage(instance)
            break;
        case "/pages/collection":
            actionCollections(instance)
            break;
        case "/pages/day":
            actionDay(instance)
            break;
        case "/pages/creatorTask":
            actionCreatorTask(instance)
            break;
        case "/pages/creatorCollection":
            actionCreateCollections(instance)
            break;
        default:
            console.log('route /');
    }
}