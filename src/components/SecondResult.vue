<template>
  <div>
    <p class="counter-container"> Sayaç : {{ double }}</p>
    <p class="counter-container"> Tıklama Sayısı : {{ stringC }}</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {

  // Direk aynı ismi kullanabilriiz.
  // computed: mapGetters([
  //   'getDoubleCounter',
  //   'stringCounter'
  // ]),
  // -------------------
  // mapGetters içindeki objelerin isimlerini değiştirebiliriz
  // computed: mapGetters({
  //   double: 'getDoubleCounter',
  //   stringC: 'stringCounter'
  // })

  // Hem getters hem de kendi custom computed methodlarını kullanacaksak böyle kullanırız. ecma script spread operatör özelliği
  computed: {
    ...mapGetters({
      double: 'getDoubleCounter',
      stringC: 'stringCounter'
    }),
    customProp () {
      return 'aa'
    }
  }
}

</script>
<style scoped>
.counter-container {
  border: 1px solid #aa7f08;
  padding: 10px 5px;
  background-color: #fbbd08;
  font-size: 20px;
  color: #000;
}
</style>
