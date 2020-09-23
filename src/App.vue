<template>
  <div class="container-fluid text-center">
    <br><br><br>
    <h2>
      <strong v-once :style="{'color' : getRandomColor()}">Poğaça </strong>
      <strong v-once :style="{'color' : getRandomColor()}">Nerede </strong>
      <strong v-once :style="{'color' : getRandomColor()}">?</strong>
    </h2>
    <br />
    <p>
      <strong
        style="color: #555555"
      >Açık kartlarda birini seçtikten sonra, kapalı olan karta tıklayınız</strong>
    </p>

    <div class="row d-flex justify-content-center" style="margin-top:50px">
      <div class="col d-flex justify-content-center">
        <div class="cats">
          <img src="./assets/card-1.jpg" :class="{clicked : selectedCat == 1}" alt="" @click="selectCat(1,$event)">
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="cats">
          <img src="./assets/card-2.jpg" :class="{clicked : selectedCat == 2}" alt="" @click="selectCat(2,$event)">
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="cats">
          <img src="./assets/card-3.jpg" :class="{clicked : selectedCat == 3}" alt="" @click="selectCat(3,$event)">
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="cats">
          <img src="./assets/card-4.jpg" :class="{clicked : selectedCat == 4}" alt="" @click="selectCat(4,$event)">
        </div>
      </div>
      <div class="col d-flex justify-content-center">
        <div class="cats">
          <img class="" src="./assets/card-5.jpg" :class="{clicked : selectedCat == 5}" alt="" @click="selectCat(5,$event)">
        </div>
      </div>
    </div>

<br>
<br>

<div class="row d-flex justify-content-center">
  <div class="col d-flex justify-content-center">
   <div class="cats">
      <img src="./assets/logo.png" alt="" @click="revealRandomCat($event)">
   </div>
  </div>
</div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedCat: 0,
      randomCat: 0
    }
  },
  filters: {
  },
  methods: {
    getRandomColor () {
      var letters = '0123456789ABCDEF'
      var color = '#'
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },
    selectCat (cat, $event) {
      this.selectedCat = cat
      $event.target.class.attach = 'clicked'
    },
    revealRandomCat ($event) {
      $event.target.src = require('./assets/card-' + this.randomCat + '.jpg')

      if (this.selectedCat === this.randomCat) {
        console.log('you win')
      } else {
        console.log('you lose')
      }

      setTimeout(() => {
        $event.target.src = require('./assets/logo.png')
        this.selectedCat = 0
      }, 1000)
    }

  },
  watch: {
    selectedCat (value) {
      this.randomCat = Math.floor(Math.random() * 5) + 1
      console.log(this.randomCat)
    }
  },
  computed: {
    randomCatImgSrc () {
      console.log('comp calıstı')
      return require('./assets/card-' + this.randomCat + '.jpg')
    }
  },
  created () {
    this.randomCat = Math.floor(Math.random() * 5) + 1
  }

}
</script>
<style type="sass">
.cats {
  /* background-color: rgb(219, 97, 97); */
  width: 200px;
  transform: scale(1,1);
  transition: transform 0.2s;
}
.cats img{
  border: 1px solid indianred;
  transition: 0.2s;
}

.cats:hover{
  /* box-shadow: 0px 0px 55px 0px   rgba(0,0,0,0.41); */
  transform: scale(1.1,1.1);
  transition: transform 0.2s;
}

.clicked{
  box-shadow: 5px 5px 22px 0px   rgba(235, 8, 8, 0.41);
  transform: scale(1.1,1.1);
  transition: transform 0.2s;
}

</style>
