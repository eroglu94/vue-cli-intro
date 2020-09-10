<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <!-- li farklı bir comp olacak, array olacak, array componmente gönderilecek,
      id si olacak.  https://prnt.sc/udxepr-->

      <li
        class="list-group-item"
        @click="selectServer(server)"
        v-for="server in servers"
      >Sunucu #{{ server.id }} - {{ server.status }}</li>
    </ul>
  </div>
</template>

<script>
import { serverBus } from '../../main'

export default {
  data () {
    return {
      servers: [
        { id: 1, status: 'Kritik' },
        { id: 2, status: 'Normal' },
        { id: 3, status: 'Tehlikede' },
        { id: 4, status: 'Bilinmiyor' },
        { id: 5, status: 'Lost' }
      ]
    }
  },
  methods: {
    selectServer (server) {
      serverBus.$emit('selectedServer', server)
      serverBus.$emit('servers', this.servers)
    }
  },
  created () {
    console.log('Server Bilgisi Duyruldu')
    serverBus.$emit('servers', this.servers)
  }
}
</script>
