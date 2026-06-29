import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/button' },
  { path: '/button', component: () => import('../demos/ButtonDemo.vue') },
  { path: '/input', component: () => import('../demos/InputDemo.vue') },
  { path: '/card', component: () => import('../demos/CardDemo.vue') },
  { path: '/table', component: () => import('../demos/TableDemo.vue') },
  { path: '/menu', component: () => import('../demos/MenuDemo.vue') },
  { path: '/dialog', component: () => import('../demos/DialogDemo.vue') },
  { path: '/drawer', component: () => import('../demos/DrawerDemo.vue') },
  { path: '/pagination', component: () => import('../demos/PaginationDemo.vue') },
  { path: '/select', component: () => import('../demos/SelectDemo.vue') },
  { path: '/switch', component: () => import('../demos/SwitchDemo.vue') },
]

export default routes
