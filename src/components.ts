import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import isLogin from './components/Modals/isLogin.vue'
export const components = {
  isLogin: isLogin
}
