import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: 'SearchView' */ '../views/SearchView')
  },
  {
    path: '/details',
    name: 'details',
    component: () => import(/* webpackChunkName: 'MovieDetailsView' */ '../views/MovieDetailsView')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: 'NotFoundView' */ '../views/NotFoundView')
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router