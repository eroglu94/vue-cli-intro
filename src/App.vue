<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>VueJs ile gelen Directive Tanımları</h3>
        <p v-text="'deneme yanılma methodu her zaman iyidir'"></p>
        <p v-html="'<strong>Bu da v-html</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom Directive</h3>
        <p
          v-color:background.delay.flash="'blue'"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, earum?</p>
        <p
          v-color="'red'"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, earum?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    color: { // Local Directive Tanımı
      bind (el, binding, vnode) {
        var delay = 0
        if (binding.modifiers.delay) {
          delay = 2000
        }

        if (binding.modifiers.flash) {
          const firstColor = binding.value
          const secondColor = '#fbbd08'
          const currentColor = firstColor
        } else {
          setInterval(() => {
            if (binding.arg === 'background') {
              el.style.backgroundColor = binding.value
            } else {
              el.style.color = binding.value
            }
          }, delay)
        }
      }
    }
  }
}
</script>

<style>
</style>
