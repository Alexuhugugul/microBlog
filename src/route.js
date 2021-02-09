import actionMainPage from './controller/main.js';
import actionKeysPage from './controller/keys.js';
import actionMonthPage from './controller/month.js';
import { actionDayPage } from './controller/day.js';
import { actionCreatorTaskPage } from './controller/creatorTask.js';
import { actionCreateMonth } from './controller/createNewMonth.js';
import { actionTasksMonth } from './controller/tasksMonth';

import { actionCollections } from './controller/collection.js';
import { actionCreateCollectionsPage } from './controller/createCollection.js';

export default function routes() {
    const url = window.location

    switch (url.pathname) {
        case "/pages/main.html":
            actionMainPage()
            break;
        case "/pages/keys.html":
            actionKeysPage()
            break;
        case "/pages/month":
            actionMonthPage()
            break;
        case "/pages/collection":
            actionCollections()
            break;
        case "/pages/day":
            actionDayPage()
            break;
        case "/pages/creatorTask":
            actionCreatorTaskPage()
            break;
        case "/pages/creatorCollection":
            actionCreateCollectionsPage()
            break;
        case "/pages/creatorNewMonth.html":
            actionCreateMonth()
            break;
        case "/pages/tasksMonth":
            actionTasksMonth()
            break;
        case "/pages/creatorNewTaskForMonth":
            actionTasksMonth()
            break;
        default:
            console.log('route /');
    }
} 