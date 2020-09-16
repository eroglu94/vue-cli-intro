<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <!-- Soru 1 -->
        <!-- Girmiş olduğunuz yazıyı tersten yazacak bir Filter tanımı yapınız ve bunu <p> içerisinde uygulayınız -->
        <input type="text" v-model="message" />
        <p>{{ message | makeReverse }}</p>
        <p>{{ message }}</p>

        <!-- Soru 2 -->
        <!-- Global bir Filter tanımlayarak size kelime sayısını ve kelimeyi veren bir Filter tanımı yapınız -->
        <!-- Örneğin : "videosinif.com" => videosinif.com (14) Şeklinde çıktı vermelidir -->
        <p>{{ message | countLetter }}</p>

        <!-- Soru 3 -->
        <!-- Soru 1 ve 2 deki uygulamaların aynısını Computed Property kullanarak yapınız -->

        <h3>Computed İle yapılanlar</h3>
        <p>{{ makeReverse }}</p>
        <p>{{ countLetter }}</p>

        <!-- Soru 4 -->
        <!-- 3.Uygulamadaki Computed Property'leri bir Mixin aracılığı ile tanımlayarak tekrardan kodlarınızı düzenleyiniz-->

<!-- statik yapılacakmış. kolay yaparsın. ben dinamik yapılacak zannetmiştim -->

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  filters: {
    makeReverse (value) {
      return value.split('').reverse().join('')
    }
  },
  computed: {
    makeReverse () {
      return this.message.split('').reverse().join('')
    },
    countLetter () {
      return '( ' + this.message + ' ) ' + this.message.length
    }
  }
}
</script>
<style>
</style>
