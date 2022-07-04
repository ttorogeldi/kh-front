import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from "axios";
import eventBus from "@/plugins/eventBus";
import './assets/styles/index.scss'
import {Plugin} from 'vue-responsive-video-background-player'

Vue.config.productionTip = false


Vue.use(Plugin);
new Vue({
    vuetify,
    router,
    axios,
    eventBus,
    render: h => h(App)
}).$mount('#app')
