<template>
  <div class="container">
    <h3>User Component</h3>
    <hr />
    <p>User ID : {{ id }}</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum
      libero odit optio repellendus sed soluta? Animi, atque blanditiis commodi
      consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <hr>
    <button class="btn btn-success" @click="navigateToHome">Home Componentine Git</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    navigateToHome () {
      // Navigate için 3 farklı yol vardır. Herbiri aşağıda
      // this.$router.push('/') //direk strin alır
      // this.$router.push({ path: '/' }) // obje alır
      this.$router.push({ name: 'anasayfa' }) // yine obje alır fakat custom isimlendirilmiş routese-sayfaya gider
    }
  },
  watch: {
    '$route' (value, oldValue) {
      this.id = value.params.id
    }
  }
}
</script>
