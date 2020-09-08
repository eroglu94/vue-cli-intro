<template>
  <div class="wcol-md-6">
    <h3>Child Component 1 (User Detail)</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanici Adı : {{ name }}</p>
    <p>Kullanici Adı : {{ switchName() }}</p>
    <button @click="sendToParent">Veriyi Parenta Gönder</button>
  </div>
</template>
<script>
export default {
  props: {
    name: String
  },
  methods: {
    switchName () {
      return this.name.split('').reverse().join('')
    },
    sendToParent () {
      this.$emit('data', 'Kablosuz Kedi')
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
