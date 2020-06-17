import Vue from "vue";

import Framework7 from 'framework7/framework7.esm.bundle.js';
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';
import 'framework7/css/framework7.bundle.rtl.css';
import 'framework7-icons/css/framework7-icons.css';

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Framework7.use(Framework7Vue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
