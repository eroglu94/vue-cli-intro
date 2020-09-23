import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-vue-resource-7ecb9.firebaseio.com/users.json'
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
