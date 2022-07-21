<template>
  <input type="checkbox" v-bind:value="value" v-on:click="toggleCheckBox">
</template>

<script>
export default {
  name: "CheckBox",
  // v-model 은 input 이벤트와 value 값으로 조작이 됨
  // 받을 때에는 value 로 받고 input 이벤트를 날리면서 값을 넘겨줌
  props: ['value'],
  methods: {
    toggleCheckBox() {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style scoped>

</style>