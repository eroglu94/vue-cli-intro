import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    sendToServerData (serverData) {
      this.$emit('serverDataSent', serverData)
    }
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
