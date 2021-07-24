import { createRouter, createWebHistory } from 'vue-router'

import LayoutA from '@/layouts/LayoutA.vue'
import LayoutB from '@/layouts/LayoutB.vue'

import Index from '@/views/Index.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    meta: { layout: LayoutA },
    component: Index
  },

  {
    path: '/about',
    meta: { layout: LayoutB },
    component: About
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
