<template>
  <div>
    <check-box v-model="checked"></check-box>
  </div>
</template>

<script>
import CheckBox from '@/components/CheckBox'

export default {
  name: "ControlledView",
  components: {
    CheckBox,
  },
  data() {
    return {
      checked: false,

    }
  }
}
</script>

<style scoped>

</style>