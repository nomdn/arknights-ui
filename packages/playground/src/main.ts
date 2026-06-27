import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ArknightsUI from '@arknights-ui/arknights-ui'
import App from './App.vue'
import routes from './router'

const app = createApp(App)
app.use(ArknightsUI)
app.use(createRouter({
  history: createWebHashHistory(),
  routes,
}))
app.mount('#app')
