<template>
  <ul class="nav nav-pills">
    <br />
    <router-link
      exact-active-class="active"
      to="/"
      tag="li"
    ><a>Home</a></router-link>
    <router-link
      exact-active-class="active"
      to="/user/1"
      tag="li"
    ><a>User</a></router-link>
    <router-link
      exact-active-class="active"
      to="/user/2"
      tag="li"
    ><a>User</a></router-link>
    <!-- tag="li" kısmı şu işe yarar: o elemet bir li elementi gibi davranacak demektir. -->
  </ul>
</template>

<script>
export default {

}
</script>

<style>
</style>
