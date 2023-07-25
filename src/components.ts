import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import isLogin from './components/Modals/isLogin.vue'
import isButton from './components/UI/isButton.vue'
export const components = {
  isLogin: isLogin,
  isButton: isButton
}
