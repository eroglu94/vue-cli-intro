import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods: {
    changeAge (age) {
      this.$emit('ageEdited', age)
    }
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
