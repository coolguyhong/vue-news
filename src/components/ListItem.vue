<template>
  <div>
    <ul class="news-list">
      <li class="post" v-for="item in listItems" v-bind:key="item">
        <!-- 포인트 영역 -->
        <div class="point">
          {{ item.points || 0 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역-->
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">
                {{ item.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link v-if="item.user" v-bind:to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
            <a v-else :href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  computed: {
    listItems() {
      return this.$store.state.list
    }
  },
  // created() {
    // 지금 this는 해당 컴포넌트(NewsView)
    // JavaScript 기본적 this 전역
    // 비동기 후 es6 화살표 함수는 this 기존 컴포넌트
  //   const name = this.$route.name
  //   if (name === 'news') {
  //     this.$store.dispatch('FETCH_NEWS')
  //   } else if (name === 'ask') {
  //     this.$store.dispatch('FETCH_ASK')
  //   } else if (name === 'jobs') {
  //     this.$store.dispatch('FETCH_JOBS')
  //   }
  // }
}
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.point {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>