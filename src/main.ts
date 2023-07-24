import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import './assets/scss/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from './store.ts'

import {
  faBars,
  faXmark,
  faShoppingBag,
  faCartShopping,
  faMagnifyingGlass,
  faAngleDown,
  faEllipsisVertical,
  faInfo,
  faStar
} from '@fortawesome/free-solid-svg-icons'

import { faCircle, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'

import vClickOutside from 'click-outside-vue3'

library.add(
  faBars,
  faXmark,
  faUser,
  faShoppingBag,
  faCartShopping,
  faMagnifyingGlass,
  faAngleDown,
  faEllipsisVertical,
  faInfo,
  faStar,
  faHeart,
  faCircle
)

createApp(App)

const app = createApp(App)
app.use(vClickOutside)
app.use(store)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')
