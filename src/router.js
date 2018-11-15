import Vue from 'vue'
import Router from 'vue-router'
// The vue is given a name, here Home
import ThreadShow from '@/pages/PageThreadShow'
import Home from '@/pages/PageHome'
import NotFound from '@/pages/PageNotFound'

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
      path: '/thread/:id',
      // Always use the CRUD verb when naming the component
      name: 'ThreadShow',
      component: ThreadShow,
      // Setting props to true will send params to the child automatically
      props: true
    },
    {
      path: '*',
      name: "NotFound",
      component: NotFound
    }
  ]
})
