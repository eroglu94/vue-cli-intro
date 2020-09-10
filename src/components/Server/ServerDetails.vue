<template>
  <div class="col-xs-12 col-sm-6">
    <p>{{ selectedServer.status }}</p>
<button @click="changeStatus"> Change Status</button>
    <!-- servera tıklandığında serverin bilgisi gelecek, button olacak
    buttona tıklandığında status normal olacak-->
  </div>
</template>
<script>
import { serverBus } from '../../main'

export default {
  methods: {
    changeStatus () {
      console.log(this.servers)
      this.servers[this.selectedServer.id - 1].status = 'Normal'
    }
  },
  data () {
    return {
      selectedServer: {},
      servers: []
    }
  },
  created () {
    serverBus.$on('selectedServer', (selectedServer) => {
      console.log('yeni server secildi')
      this.selectedServer = selectedServer
    })

    serverBus.$on('servers', (servers) => {
      console.log('server alındı')
      this.servers = servers
    })
  }
}

</script>
