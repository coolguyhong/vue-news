<template>
  <div>
    <p v-for="item in this.$store.state.newsList" v-bind:key="item">
      <a v-bind:href="item.url">
        {{ item.title }}
      </a>
      <small>
        {{ item.time_ago }} by
        <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  name: 'NewsView',
  created() {
    // 지금 this는 해당 컴포넌트(NewsView)
    // JavaScript 기본적 this 전역
    // 비동기 후 es6 화살표 함수는 this 기존 컴포넌트
    this.$store.dispatch('FETCH_NEWS')
  }
}
</script>

<style scoped>

</style>