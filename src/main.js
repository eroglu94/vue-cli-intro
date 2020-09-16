import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.filter('countLetter', (value) => {
  return '( ' + value + ' ) ' + value.length
})

new Vue({
  render: h => h(App)
}).$mount('#app')
