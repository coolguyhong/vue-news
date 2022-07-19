<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view v-slot="{ Component }">
      <transition name="page">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <spinner-com :loading="loadingStatus"></spinner-com>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar'
import SpinnerCom from '@/components/SpinnerCom'

export default {
  components: {
    ToolBar,
    SpinnerCom
  },
  data() {
    return {
      loadingStatus: false
    }
  },
  methods: {
    startSpinner() {
      console.log('start')
      this.loadingStatus = true
    },
    endSpinner() {
      console.log('end')
      this.loadingStatus = false
    }
  },
  created() {
    this.emitter.on('start:spinner', this.startSpinner)
    this.emitter.on('end:spinner', this.endSpinner)
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #35495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.route-link-exact-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s ease;
}
.page-enter, .page-leave-to /* .page-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
