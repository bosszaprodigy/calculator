import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(Vuex)
new Vue({
  render: h => h(App),
}).$mount('#app')
