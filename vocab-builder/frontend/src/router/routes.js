
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/words', component: () => import('pages/Words') },
      { path: '/words/:id/edit', component: () => import('pages/Edit') },
      { path: 'words/new', component: () => import('pages/CreateWord') },
      { path: '/words/:id', component: () => import('pages/Show') },
      { path: '/', redirect: '/words' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
