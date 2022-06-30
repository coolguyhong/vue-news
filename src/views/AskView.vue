<template>
  <div>
    <div v-for="ask in askList" v-bind:key="ask">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '@/api'

export default {
  name: 'AskView',
  data() {
    return {
      askList: []
    }
  },
  created() {
    fetchAskList()
      .then(response => {
        this.askList = response.data
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>

<style scoped>

</style>