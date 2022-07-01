<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile v-bind:info="item">
        <template v-slot:username>
          <div>
            <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
          </div>
        </template>
        <template v-slot:time>
          {{ 'Posted ' + item.time_ago }}
        </template>
      </user-profile>
    </section>
    <section>
      <h2>
        {{ item.title }}
      </h2>
    </section>
    <section>
      <div v-html="item.content">
      </div>
    </section>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile'
import { mapState } from 'vuex'

export default {
  name: 'ItemView',
  components: {
    UserProfile
  },
  computed: {
    ...mapState({
      item: state => state.item
    })
  },
  created() {
    this.$store.dispatch('FETCH_ITEM', this.$route.params.id)
  }
}
</script>

<style scoped>
</style>