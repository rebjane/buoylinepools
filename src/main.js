import Vue from 'vue'
import App from './App.vue'
import { prismic } from "./prismic.js";
prismic.fetchData().then(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
});

Vue.config.productionTip = false


