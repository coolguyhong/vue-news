<template>
  <div>
    <div v-for="news in newsList" v-bind:key="news">{{ news.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '@/api'

export default {
  name: 'NewsView',
  data() {
    return {
      newsList: []
    }
  },
  created() {
    // 지금 this는 해당 컴포넌트(NewsView)
    // JavaScript 기본적 this 전역
    // 비동기 후 es6 화살표 함수는 this 기존 컴포넌트
    fetchNewsList()
      .then(response => {
        console.log(response)
        this.newsList = response.data
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>

<style scoped>

</style>