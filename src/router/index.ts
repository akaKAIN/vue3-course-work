import { createRouter, createWebHistory, Router } from 'vue-router'
import Auth from '@/views/Auth.vue'
import { adminRouterModule } from '@/router/modules/admin'

const router: Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
      meta: { layout: 'auth', auth: false }
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Shop.vue'),
      meta: { layout: 'main', auth: false }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/Product.vue'),
      meta: { layout: 'main', auth: false },
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/Cart.vue'),
      meta: { layout: 'main', auth: false }
    },
    adminRouterModule
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  // console.log(to, from)
  next()
})

export default router
