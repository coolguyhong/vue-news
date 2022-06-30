<template>
  <div>
    <p v-for="item in askList" v-bind:key="item">
      <router-link v-bind:to="`/item/${item.id}`">
        {{ item.title }}
      </router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AskView',
  computed: {
    ...mapGetters({
      askList: 'fetchedAsk'
    })
    // ...mapGetters([
    //   'fetchedAsk'
    // ]),
    // ...mapState({
    //   askList: state => state.askList
    // }),
    // askList() {
    //   return this.$store.state.askList
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK')
  }
}
</script>

<style scoped>

</style>