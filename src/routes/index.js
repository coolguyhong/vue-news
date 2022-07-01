import { createRouter, createWebHashHistory } from 'vue-router'
import NewsView from '@/views/NewsView'
import AskView from '@/views/AskView'
import JobsView from '@/views/JobsView'
import ItemView from '@/views/ItemView'
import UserView from '@/views/UserView'

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
    component: NewsView
  },
  {
    path: '/ask',
    name: 'ask',
    component: AskView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
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
  history: createWebHashHistory(),
  routes
})