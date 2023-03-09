import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import TestApp from '../test/TestApp.vue'

let vite_env = import.meta.env.VITE_ENV;
let application;
switch (vite_env) {
    case "dev": {
        application = createApp(App);
        break;
    }
    case "prod": {
        application = createApp(App);
        break;
    }
    case "test": {
        application = createApp(TestApp);
        break;
    }
    default: {
        application = createApp(App);
    }
}
application.mount('#app');