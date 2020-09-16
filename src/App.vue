<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>Selamlar kablosuz kedi | cro</p>
        <p>{{ message | toUpperCase}}</p>
        <p>{{ message | toLowerCase}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Selamlar kablosuz kedi | caro'
    }
  },
  filters: {
    toUpperCase (value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style>
</style>
