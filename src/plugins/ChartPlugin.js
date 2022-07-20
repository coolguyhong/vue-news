import { Chart as ChartJS, registerables } from 'chart.js'

ChartJS.register(...registerables)

export default {
  install: (app) => {
    console.log('chart plugin loaded')
    app.config.globalProperties.$_Chart = ChartJS
  }
}