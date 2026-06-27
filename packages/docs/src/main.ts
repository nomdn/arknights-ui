import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ArknightsUI from '@arknights-ui/arknights-ui'
import App from './App.vue'
import routes from './router'

import 'prismjs/themes/prism-tomorrow.css'

const app = createApp(App)
app.use(ArknightsUI)
app.use(createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
}))
app.mount('#app')
