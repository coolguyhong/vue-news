<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/charts">Charts</router-link> |
    <router-link to="/component">Component</router-link> |
    <router-link to="/slots">Slots</router-link> |
    <router-link to="/controlled">Controlled</router-link> |
    <router-link to="/renderless">Renderless</router-link>
  </div>
</template>

<script>
export default {
  name: "ToolBar"
}
</script>

<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}
.header .router-link-exact-active {
  color: #35495e;
}
.header a {
  color: white;
}
</style>