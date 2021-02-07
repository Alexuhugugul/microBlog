import './scss/style.scss';
import './view/index.js';
import { route } from './route.js';
import instanceStoreManager  from './StoreManager';
import Model from './models/Model.js'

instanceStoreManager.setItem()
route();