<template>
  <div class="container">
    <div class="col-md-6 col-md-offset-3">
      <h3 v-custom-on:click="clicked">Directive Sınavı</h3>
      <!-- Soru -->
      <!-- Event'leri dinleyecek v-on gibi çalışan bir Directive geliştiriniz. -->

<div class="customOn" v-custom-on:mousemove="mousemove"></div>

    </div>
  </div>
</template>

<script>
export default {
  directives: {
    customOn: {
      bind (el, binding, vnode) {
        var type = binding.arg
        var fn = binding.value
        el.addEventListener(type, fn)
      }

    }
  },
  methods: {
    clicked () {
      alert('tıklandı')
    },
    mousemove () {
      console.log('mouse moved!!!')
    }
  }
}
</script>

<style>
.customOn{
width: 100px;
height: 100px;
border: 1px solid red;
}
</style>
