import {createApp} from 'vue'
import './style.css'
import designerApp from './2DApp.vue'
import threeApp from './3DApp.vue'
import TestApp from '../test/2d/TestApp.vue'
import './CustomConfig'

let vite_env = import.meta.env.VITE_ENV;
let application;
switch (vite_env) {
    case "2d.dev": {
        application = createApp(designerApp);
        break;
    }
    case "3d.dev": {
        application = createApp(threeApp);
        break;
    }
    case "test2d": {
        application = createApp(TestApp);
        break;
    }
    default: {
        application = createApp(TestApp);
    }
}
application.mount('#app');