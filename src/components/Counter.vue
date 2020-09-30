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
<hr>
    <button
      class="btn btn-success"
      @click="increment"
    >+ Arttır</button>
    <button
      class="btn btn-danger"
      @click="decrement"
    >- Azalt</button>
<hr>
    <button
      class="btn btn-success"
      @click="incrAsync"
    >+ Arttır Async</button>
    <button
      class="btn btn-danger"
      @click="decAsync"
    >- Azalt Async</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
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
    ]),
    ...mapActions([
      'incrAsync',
      'decAsync',
      'increment',
      'decrement'
    ])
  }
}
</script>

<style>
</style>
