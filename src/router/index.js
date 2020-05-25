import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'favorites',
    props: true,
    component: () => import('../views/Favorites.vue')
  },
  {
    path: '/team/:id',
    name: 'IndividualView',
    props: true,
    component: () => import('../components/IndividualView.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
