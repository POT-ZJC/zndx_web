import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/screen-big',
    // redirect: '/login'
    name: 'screen-small',
    component: () => import('@/views/screen-big')
  },
  {
    path: '/screen-small',
    name: 'screen-small',
    component: () => import('@/views/screen-small')

  },
]

const router = new VueRouter({
  routes
})



export default router
