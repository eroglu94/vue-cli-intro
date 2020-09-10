import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

// eslint-disable-next-line no-unused-vars
export const serverBus = new Vue()

new Vue({
  render: h => h(App)
}).$mount('#app')
