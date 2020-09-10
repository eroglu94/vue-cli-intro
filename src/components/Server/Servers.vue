<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
     <app-server @click.native="sendToDetail(server)" v-for="server in servers" :serverData="server"></app-server>
    </ul>
  </div>
</template>

<script>
import Server from './Server'
import { eventBus } from '../../main'

export default {
  components: {
    appServer: Server
  },
  data () {
    return {
      servers: [
        { id: 1, status: 'kritik' },
        { id: 2, status: 'Normal' },
        { id: 3, status: 'Tehlikede' },
        { id: 4, status: 'Bilinmiyor' },
        { id: 5, status: 'Lost' }
      ]
    }
  },
  methods: {
    sendToDetail (server) {
      eventBus.sendToServerData(server)
    }
  }
}

</script>
