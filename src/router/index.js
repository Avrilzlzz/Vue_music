import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../views/Recommend.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/hot',
    component: () => import('../views/Hot.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router