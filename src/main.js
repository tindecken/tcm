import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueSplit from 'vue-split-panel'

Vue.config.productionTip = false
Vue.use(VueSplit)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
