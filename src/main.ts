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
  faCartShopping
} from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faXmark, faUser, faHeart, faShoppingBag, faCartShopping)

createApp(App)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router).mount('#app')
