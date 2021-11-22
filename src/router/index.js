import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'livello-uno',
    component: () => import ('../views/LivelloUno.vue')
  },
  {
    path: '/2a',
    name: '2a',
    component: () => import('../views/LivelloDueA.vue')
  },
  {
    path: '/2b',
    name: '2b',
    component: () => import('../views/LivelloDueB')
  },
  {
    path: '/3a',
    name: '3a',
    component: () => import('../views/LivelloTreA')
  },
  {
    path: '/3b',
    name: '3b',
    component: () => import('../views/LivelloTreB')
  },
  {
    path: '/4a',
    name: '4a',
    component: () => import('../views/LivelloQuattroA')
  },
  {
    path: '/4b',
    name: '4b',
    component: () => import('../views/LivelloQuattroB')
  },
  {
    path: '/5',
    name: '5',
    component: () => import('../views/LivelloCinque')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
