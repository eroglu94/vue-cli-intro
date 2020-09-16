import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.filter('toLowerCase', (value) => {
  return value.toLowerCase()
})

new Vue({
  render: h => h(App)
}).$mount('#app')
