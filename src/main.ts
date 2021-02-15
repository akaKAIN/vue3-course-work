import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/styles/theme.css'
import pagination from '@/plugins/pagination/pagination'

createApp(App)
  .use(store)
  .use(router)
  .use(pagination)
  .mount('#app')
