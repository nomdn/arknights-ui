import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/guide/getting-started' },
  // Guide
  { path: '/guide/getting-started', component: () => import('../pages/GettingStarted.vue') },
  { path: '/guide/installation', component: () => import('../pages/Installation.vue') },
  // Components
  { path: '/components/button', component: () => import('../pages/ButtonDoc.vue') },
  { path: '/components/input', component: () => import('../pages/InputDoc.vue') },
  { path: '/components/card', component: () => import('../pages/CardDoc.vue') },
  { path: '/components/table', component: () => import('../pages/TableDoc.vue') },
  { path: '/components/menu', component: () => import('../pages/MenuDoc.vue') },
  { path: '/components/dialog', component: () => import('../pages/DialogDoc.vue') },
  { path: '/components/drawer', component: () => import('../pages/DrawerDoc.vue') },
  { path: '/components/pagination', component: () => import('../pages/PaginationDoc.vue') },
  // Design
  { path: '/design/tokens', component: () => import('../pages/DesignTokens.vue') },
  { path: '/design/colors', component: () => import('../pages/ColorSystem.vue') },
]

export default routes
