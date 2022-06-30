<template>
  <div>
    <div v-for="job in this.$store.state.jobsList" v-bind:key="job">{{ job.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'JobsView',
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style scoped>

</style>