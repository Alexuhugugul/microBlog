import './scss/style.scss';
import './view/index.js'
import localStorageManager from './interfaces/localStorageManager';
import indexBDManager from './interfaces/indexBDManager';
import { route } from './route.js'
import instanceStoreManager  from './StoreManager'



route(instanceStoreManager);