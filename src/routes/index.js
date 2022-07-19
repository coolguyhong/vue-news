import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '@/views/NewsView'
import AskView from '@/views/AskView'
import JobsView from '@/views/JobsView'
import ItemView from '@/views/ItemView'
import UserView from '@/views/UserView'
// import createListView from '@/views/CreateListView'
import { store } from '@/store/index'
// import { createApp } from 'vue'
// import App from '@/App.vue'
import mitt from 'mitt'

const emitter = mitt()
// const app = createApp(App)
//
// app.config.globalProperties.emitter = emitter

const routes = [
  {
    path: '/',
    redirect: '/news'
  },
  {
    // path: url 주소
    path: '/news',
    name: 'news',
    // component: url 주소로 갔을 때 표시될 컴포넌트
    component: NewsView,
    // component: createListView('NewsView'),
    beforeEnter: (to, from, next) => {
      emitter.emit('start:spinner')
      store.dispatch('FETCH_LIST', to.name)
        .then(() => {
          console.log(2)
          emitter.emit('end:spinner')
          next()
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView,
    // component: createListView('AskView'),
    // beforeEnter: (to, from, next) => {
    //   emitter.emit('start:spinner')
    //   store.dispatch('FETCH_LIST', to.name)
    //     .then(() => {
    //       emitter.emit('end:spinner')
    //       next()
    //     })
    //     .catch((error) => {
    //       console.error(error)
    //     })
    // },
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
    // component: createListView('JobsView'),
    // beforeEnter: (to, from, next) => {
    //   emitter.emit('start:spinner')
    //   store.dispatch('FETCH_LIST', to.name)
    //     .then(() => {
    //       emitter.emit('end:spinner')
    //       next()
    //     })
    //     .catch((error) => {
    //       console.error(error)
    //     })
    // },
  },
  {
    path: '/item/:id',
    component: ItemView
  },
  {
    path: '/user/:id',
    component: UserView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})