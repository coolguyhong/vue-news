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
    // component: url 주소로 갔을 때 표시될 컴포넌트
    component: NewsView
  },
  {
    path: '/ask',
    component: AskView
  },
  {
    path: '/jobs',
    component: JobsView
  },
  {
    path: '/item',
    component: ItemView
  },
  {
    path: '/user',
    component: UserView
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})