/*
 * @Author: Kitetop
 * @Version: 1.0
 * @Date: 2020-06-15
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRx from 'vue-rx'
import RxCompat from 'rxjs-compat'
import ElementTsUI from '../packages/index'

Vue.use(VueAxios, axios)
Vue.use(VueRx, RxCompat)

ElementTsUI.install(Vue);
// Vue.component(Row.name, Row);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
