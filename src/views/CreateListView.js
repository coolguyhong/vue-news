import ListView from './ListView'
import { h } from 'vue'

export default function createListView(name) {
  return {
    name,
    created() {
      this.emitter.emit('start:spinner')
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched')
          this.emitter.emit('end:spinner')
        })
        .catch((error) => {
          console.error(error)
        })
    },
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    render() {
      return h(ListView)
    }
  }
}