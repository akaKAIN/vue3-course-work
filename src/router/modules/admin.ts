export const adminRouterModule = {
  path: '/admin',
  meta: { layout: 'main', auth: false },
  component: () => import('@/views/Admin.vue'),
  children: [
    {
      path: 'products',
      name: 'admin-products',
      meta: { layout: 'main', auth: false },
      component: () => import('@/components/AdminProducts.vue')
    },
    {
      path: 'categories',
      name: 'admin-categories',
      meta: { layout: 'main', auth: false },
      component: () => import('@/components/AdminCategories.vue')
    }
  ]
}
