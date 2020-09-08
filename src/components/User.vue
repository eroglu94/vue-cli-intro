<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="changeName">Değiştir</button>
    <p>childden gelen yazı  {{ childData }}</p>
    <p>İlk yaş değeri : {{age}}</p>
    <hr />
    <div class="row">
      <app-user-detail :age="age" :name="title" @data="childData = $event"></app-user-detail>
      <app-user-edit :age="age" @ageEdited="age = $event"></app-user-edit>
    </div>
  </div>
</template>
<script>
import UserDetail from './UserDetail'
import UserEdit from './UserEdit'
export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  data () {
    return {
      title: 'Gökhan',
      childData: '',
      age: 25
    }
  },
  methods: {
    changeName () {
      this.title = 'Defne'
    }

  }
}
</script>

<style>
div.container {
  margin-top: 30px;
  padding: 20px 40px;
  background-color: #6a8d99;
  border: 1px solid #666;
}
div.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
