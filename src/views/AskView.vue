<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '@/components/ListItem'
import ListMixin from '@/mixins/ListMixin'

export default {
  name: 'AskView',
  components: {
    ListItem
  },
  mixins: [ListMixin]
  // created() {
  //   this.emitter.emit('start:spinner')
  //   setTimeout(() => {
  //     this.$store.dispatch('FETCH_ASK')
  //         .then(() => {
  //           console.log('fetched')
  //           this.emitter.emit('end:spinner')
  //         })
  //         .catch((error) => {
  //           console.error(error)
  //         })
  //   }, 3000)
  // }
}
</script>

<style scoped>
</style>