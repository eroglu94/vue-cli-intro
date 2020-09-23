import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'https://vuejs-vue-resource-7ecb9.firebaseio.com'
Vue.http.interceptors.push((request, next) => {
  // if (request.method === 'POST') {
  //   request.method = 'PUT'
  // }
  next(response => {
    response.json = () => {
      return {
        userList: response.body
      }
    }
  })
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
