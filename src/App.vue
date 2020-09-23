<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-btn-group">
          <input type="text" class="form-control" v-model="userName" />
        </div>
        <button class="btn btn-primary" @click="saveUser()">Kaydet</button>
        <hr />
        <button class="btn btn-success" @click="getUsers()">Verileri Getir</button>
        <hr />
        <ul class="list-group">
          <li class="list-group-item" v-for="user in userList">{{ user.userName }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      userList: []
    }
  },
  methods: {
    saveUser () {
      this.$http.post('', { userName: this.userName })
        .then((response) => {
          console.log(response)
        })
    },
    getUsers () {
      this.$http.get()
        .then((response) => {
          // console.log(response.data)
          // console.log(response.data)
          return response.json()
        }).then(data => {
          this.userList = []
          for (const key in data.userList) {
            this.userList.push(data.userList[key])
          }
        })
    }
  }
}
</script>

<style>
</style>
