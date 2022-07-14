import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/how-to-buy',
    name: 'how',
    component: () => import('../views/HowToBuy.vue')
  },
  {
    path: '/stories',
    name: 'how',
    component: () => import('../views/Stories.vue')
  },
  {
    path: '/story',
    name: 'how',
    component: () => import('../views/StoryPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
