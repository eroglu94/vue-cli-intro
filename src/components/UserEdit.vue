<template>
  <div class="col-md-s6">
    <h3>Child Component 2 (UserEdit)</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child componentim</p>
    <p>Kullanici Yaşı : {{age}}</p>
    <button @click="changeAge">Yaş Bilgisini Değiştir</button>
  </div>
</template>
<script>
export default {
  props: {
    age: Number
  },
  data () {
    return {
      myAge: this.age
    }
  },
  methods: {
    changeAge () {
      this.$emit('ageEdited', 30)
    }
  }
}
</script>

<style scoped>
div {
  background-color: lightgoldenrodyellow;
  padding: 20px;
  border: 1px solid #666;
  display: inline-block;
}
</style>
