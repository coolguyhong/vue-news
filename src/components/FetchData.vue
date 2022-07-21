<script>
import axios from 'axios';

export default {
  name: "FetchData",
  props: ['url'],
  data() {
    return {
      response: null,
      loading: true,
    }
  },
  created() {
    axios.get(this.url)
        .then(response => {
          this.response = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
  },
  render() {
    // 데이터를 받은 후 데이터만 넘겨줌
    return this.$slots.default({
      response: this.response,
      loading: this.loading,
    });
  },
}
</script>
