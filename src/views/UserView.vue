<template>
  <div>
    <p>name : {{ user.id }}</p>
    <p>karma : {{ user.karma }}</p>
    <p>created: {{ user.created }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserView',
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.$store.dispatch('FETCH_USER', this.$route.params.id)
  }
}
</script>

<style scoped>

</style>