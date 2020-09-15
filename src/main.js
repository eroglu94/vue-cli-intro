import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

// ***Global directive tanımı***
// Vue.directive('color', {
//   bind (el, binding, vnode) {
//     if (binding.modifiers.delay) {
//       setInterval(() => {
//         if (binding.arg === 'background') {
//           el.style.backgroundColor = binding.value
//         } else {
//           el.style.color = binding.value
//         }
//       }, 2000)
//     } else {
//       if (binding.arg === 'background') {
//         el.style.backgroundColor = binding.value
//       } else {
//         el.style.color = binding.value
//       }
//     }
//   }
// })

new Vue({
  render: h => h(App)
}).$mount('#app')
