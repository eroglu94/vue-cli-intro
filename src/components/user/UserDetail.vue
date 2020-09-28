<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr />
    <p>Kullanıcının ID Bilgisi : {{ $route.params.id }}</p>
    <router-link
      tag="button"
      class="btn btn-primary"
      :to="{
      name : 'userEdit' ,
      params : {id : $route.params.id},
      query:{name:'gohkan', lastName:'kandemir'},
      hash: '#data'
      }"
    >
      Kullanıcıyı Düzenle
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      deneme: 'Bu bir security checktir. Bu yazıyı görüyorsa, güvenli değildir demektir.'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('Component seviyesinde kontrol')
    console.log(this.deneme) // security check
    next(false)
  }
}
</script>
