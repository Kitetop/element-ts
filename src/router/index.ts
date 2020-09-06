import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '../views/Layout.vue'
import Container from '../views/Containers.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/layout',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/container',
    name: 'Container',
    component: Container
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
