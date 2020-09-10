<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button @click="selectedTheme = 'appBlue'" class="btn btn-primary">Mavi Temayı Yükle</button>
        <button @click="selectedTheme = 'appGreen'" class="btn btn-success">Yeşil Temayı Yükle</button>
        <button @click="selectedTheme = 'appRed'" class="btn btn-danger">Kırmızı Temayı Yükle</button>
        <hr />

        <!-- <app-blue>
          <h1 slot="maviSlot">Bu Mavidir</h1>
        </app-blue>
        <app-green>
          <h1 slot="yesilSlot">Bu Yeşildir</h1>
        </app-green>
        <app-red>
          <h1 slot="kırmızıSlot">Bu kırmızıdır</h1>
        </app-red> -->

        <component :is="selectedTheme">
          <h1 slot="maviSlot">Bu Mavidir</h1>
           <h1 slot="yesilSlot">Bu Yeşildir</h1>
           <h1 slot="kırmızıSlot">Bu kırmızıdır</h1>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from './components/Blue.vue'
import Green from './components/Green.vue'
import Red from './components/Red.vue'

export default {
  data () {
    return {
      selectedTheme: 'appBlue'
    }
  },

  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
}
</script>

<style>
</style>
