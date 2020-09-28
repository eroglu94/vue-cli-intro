import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)
const routerA = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

routerA.beforeEach((to, from, next) => {
  // next('/user')
  // next({ name: 'anasayfa' })
  // next(false)
  // Global olarak bütün routeleri kontrol eder
  console.log('Global olarak kontrol edildi.')
  next()
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routerA
}).$mount('#app')
