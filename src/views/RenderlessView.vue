<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <template v-slot="{ response, loading }">
        <div v-if="!loading">
          {{ response }}
        </div>
        <div v-if="loading">
          Loading...
        </div>
      </template>
    </fetch-data>
  </div>
</template>

<script>
import FetchData from '@/components/FetchData'

export default {
  name: "RenderlessView",
  components: {
    FetchData,
  }
}
</script>

<style scoped>

</style>