import Vue from 'vue'
import Resource from 'vue-resource'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Resource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
