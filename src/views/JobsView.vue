<template>
  <div>
    <div v-for="job in jobsList" v-bind:key="job">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '@/api'

export default {
  name: 'JobsView',
  data() {
    return {
      jobsList: []
    }
  },
  created() {
    fetchJobsList()
      .then(response => {
        this.jobsList = response.data
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>

<style scoped>

</style>