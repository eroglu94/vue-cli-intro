<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transitioasdsn</h3>
        <hr />

        <button class="btn btn-primary" @click="show = !show">Kutuyu Göster / Gizle</button>

        <transition name="fade">
          <div
            style="margin-top:20px;"
            class="alert alert-success"
            v-if="show"
          >Bu Bir Alert Kutusudur</div>
        </transition>

        <transition name="slide">
          <div
            style="margin-top:20px;"
            class="alert alert-warning"
            v-if="show"
          >Bu Bir Alert Kutusudur</div>
        </transition>

        <transition
          enter-class
          enter-active-class="animate__animated animate__rubberBand"
          leave-class
          leave-active-class="animate__animated animate__backOutUp"
        >
          <div style="margin-top:20px;" class="alert alert-warning" v-if="show">Animate.css</div>
        </transition>

        <div style="margin-top:20px;" class="alert alert-warning animate__animated animate__rubberBand" v-if="show">Animate.css</div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}

</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  animation: ;
}
.slide-enter-active {
}

.slide-leave {
}
.slide-leave-active {
}

@keyframes slide-in {
}
</style>
