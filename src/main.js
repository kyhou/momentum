import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faChartLine,
    faRocket,
    faChartPie,
    faFileSignature,
    faReceipt,
    faHandshake,
    faArrowUp,
    faPercent
} from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import {
    faInstagram,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import setup_interceptors_service from './services/setup_interceptors_service';

import 'aos/dist/aos.css';
import './assets/css/style.css';

library.add(
    faChartLine,
    faRocket,
    faChartPie,
    faInstagram,
    faWhatsapp,
    faFileSignature,
    faReceipt,
    faHandshake,
    faChartBar,
    faArrowUp,
    faPercent
);

setup_interceptors_service(store);

createApp(App).use(router).use(store).mount('#app');