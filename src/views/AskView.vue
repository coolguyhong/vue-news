<template>
  <div>
    <div v-for="ask in askList" v-bind:key="ask">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'AskView',
  computed: {
    ...mapGetters({
      askList: 'fetchedAsk'
    }),
    // ...mapGetters([
    //   'fetchedAsk'
    // ]),
    ...mapState({
      askList: state => state.askList
    }),
    askList() {
      return this.$store.state.askList
    }
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style scoped>

</style>