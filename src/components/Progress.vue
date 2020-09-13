<template>
   <div class="progress">
      <div
        class="progress-bar bg-info"
        role="progressbar"
        :style="{width: progress + '%'}"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >{{ progress/10 }} / 10</div>
    </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  data () {
    return {
      progress: 0
    }
  },
  created () {
    eventBus.$on('progressBarUpdated', (currentProgress) => {
      this.progress = currentProgress * 10
    })
  }
}
</script>

<style>

</style>
