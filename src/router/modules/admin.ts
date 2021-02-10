export const adminRouterModule = {
  path: '/admin',
  name: 'admin',
  meta: { layout: 'admin', auth: false },
  component: () => import('@/views/Admin.vue'),
  children: [
    {
      path: 'products',
      name: 'admin-products',
      meta: { layout: 'admin', auth: false },
      component: () => import('@/views/admin/AdminProducts.vue')
    },
    {
      path: 'categories',
      name: 'admin-categories',
      meta: { layout: 'admin', auth: false },
      component: () => import('@/views/admin/AdminCategories.vue')
    }
  ]
}
