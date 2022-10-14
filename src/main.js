import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from 'vuex'
import store from '../store'

import './assets/css/base.css'

import ('../node_modules/swiper/dist/css/swiper.min.css')

const app = createApp(App)

app.use(router)
    .use(store)
    .mount('#app')
