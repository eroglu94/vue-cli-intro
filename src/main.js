import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)
const routerA = new VueRouter({
  routes: routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routerA
}).$mount('#app')
