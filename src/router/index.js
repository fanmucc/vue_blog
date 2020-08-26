import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../components/Layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '_Home',
    component: Main,
    redirect: '/home',    // 路由重定向
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/post',
    name: '_post',
    component: Main,
    children: [
      {
        path: '/post/:id',
        name: 'post',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
]

const router = new VueRouter({
  routes
})

export default router
