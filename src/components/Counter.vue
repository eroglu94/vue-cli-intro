<template>
  <div>
    <button
      class="btn btn-success"
      @click="increaseCounter"
    >+ Arttır</button>
    <button
      class="btn btn-danger"
      @click="decreaseCounter"
    >- Azalt</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {

  methods: {
    // incrementCounter () {
    //   // this.$emit('counterEvent', 1)
    //   // this.$store.state.counter++
    //   // this.$store.commit('updateCounter', 1)
    //   this.$store.commit('increaseCounter')
    // },
    // decrementCounter () {
    //   // this.$emit('counterEvent', -1)
    //   // this.$store.state.counter--
    //   // this.$store.commit('updateCounter', -1)
    //   this.$store.commit('decreaseCounter')
    // }
    ...mapMutations([
      'increaseCounter',
      'decreaseCounter'
    ])
  }
}
</script>

<style>
</style>
