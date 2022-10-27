import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const ServerUrl = "http://localhost:5000";
export default ServerUrl;

createApp(App)
    .use(router)
    .mount('#app')
