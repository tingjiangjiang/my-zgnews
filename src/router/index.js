import Vue from 'vue'
import VueRouter from 'vue-router'
import New from '@/views/New'
import Newflash from '@/views/New-flash'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'new',
    component: New
  },
  {
    path: '/new-flash',
    name: 'new-flash',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component:Newflash
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
