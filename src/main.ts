import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import './assets/scss/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from './store/store.ts'
import { createPinia } from 'pinia'

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

import { components } from './components.ts'
import directives from './directives.ts'

const app = createApp(App)
const pinia = createPinia()

app.use(vClickOutside)
app.use(store)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)

Object.entries(components).forEach(([name, component]) => {
  app.component(name, component)
})

Object.entries(directives).forEach(([name, directive]) => {
  app.directive(name, directive)
})

app.use(router).mount('#app')
