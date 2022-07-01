<template>
  <user-profile v-bind:info="user">
    <template v-slot:username>
      <div>{{ user.id }}</div>
    </template>
    <template v-slot:time>
      <span>{{ 'Joined ' + user.created }}, </span>
    </template>
    <template v-slot:karma>
      <span>{{ user.karma }}</span>
    </template>
  </user-profile>
</template>

<script>
import UserProfile from '@/components/UserProfile'
import { mapState } from 'vuex'

export default {
  name: 'UserView',
  components: {
    UserProfile
  },
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