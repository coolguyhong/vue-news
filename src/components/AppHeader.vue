<template>
  <div>
    <header>
      <h1>{{ title }}</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    title: String,
  }
}
</script>

<style scoped>

</style>