import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import './assets/scss/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBars,
  faXmark,
  faUser,
  faHeart,
  faShoppingBag,
  faCartShopping,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import vClickOutside from 'click-outside-vue3'

library.add(
  faBars,
  faXmark,
  faUser,
  faHeart,
  faShoppingBag,
  faCartShopping,
  faMagnifyingGlass
)

createApp(App)

const app = createApp(App)
app.use(vClickOutside)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')
