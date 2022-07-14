import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from "axios";
import eventBus from "@/plugins/eventBus";
import './assets/styles/index.scss'
import {Plugin} from 'vue-responsive-video-background-player'
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);
//Vue.$toast.open({/* options */});
let instance = Vue.$toast.open('You did it!');

instance.dismiss();
Vue.$toast.clear();
Vue.config.productionTip = false
Vue.use(VueperSlides, VueperSlide);
Vue.use(Plugin);
new Vue({
    vuetify,
    router,
    axios,
    eventBus,
    render: h => h(App)
}).$mount('#app')
