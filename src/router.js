import Vue from 'vue'
import Router from 'vue-router'
// The vue is given a name, here Home
import Home from './views/Home.vue'
import ThreadShow from '@/components/ThreadShow'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      // Dynamic segment need to build our URL
      path: '/thread/show/:id',
      // Always use the CRUD verb when naming the component
      name: 'ThreadShow',
      component: ThreadShow,
      // Setting props to true will send params to the child automatically
      props: true
    }
  ]
})
