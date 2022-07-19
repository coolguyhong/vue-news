export default {
  // 재사용할 컴포넌트 옵션
  created() {
    this.emitter.emit('start:spinner')
    this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then(() => {
        this.emitter.emit('end:spinner')
      })
      .catch((error) => {
        console.error(error)
      })
  }
}