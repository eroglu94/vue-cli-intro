<template>
  <div class="container">
    <h3>User Edit Component</h3>
    <hr />
    <p>Ad : {{ $route.query.name }}</p>
    <p>Soyadı : {{ $route.query.lastName }}</p>

    <div style="height : 800px;"></div>
    <p id="data">Buraya bilgilerim gelecek</p>
  </div>
</template>
<script>
export default {}
</script>
