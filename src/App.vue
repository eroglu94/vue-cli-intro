<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <hr>
        <router-view name="header-top"></router-view>
        <transition
          name="slide"
          mode="out-in"
          type="animation"
          enter-active-class="animate__animated animate__zoomIn animate__faster"
          leave-active-class="animate__animated animate__zoomOut animate__faster"
        >
          <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>
</style>
