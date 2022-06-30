<template>
  <div>
    <div v-for="news in this.$store.state.newsList" v-bind:key="news">{{ news.title }}</div>
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