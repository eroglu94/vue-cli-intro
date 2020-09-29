<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr />
    <p>Ad : {{ $route.query.name }}</p>
    <p>Soyadı : {{ $route.query.lastName }}</p>
<button class="btn btn-primary" @click="saved = true">Onayla</button>
    <div style="height : 800px;"></div>
    <p id="data">Buraya bilgilerim gelecek</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      saved: false
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.saved) {
      next()
    } else {
      if (confirm('Tüm Bilgileriniz kaybolacak. Emin misiniz?')) {
        next()
      } else {
        next(false)
      }
    }
  }
}
</script>
