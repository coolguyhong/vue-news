import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/routes'
import { store } from '@/store'
import mitt from 'mitt'
import ChartPlugin from '@/plugins/ChartPlugin'

const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter
app.use(router)
  .use(store)
  .use(ChartPlugin)
  .mount('#app')
