import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import './assets/scss/main.scss'

const app = createApp(App)
app.use(router).mount('#app')
