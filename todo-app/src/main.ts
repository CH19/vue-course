import './assets/main.css'

import { createApp } from 'vue'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { PrTrash } from 'oh-vue-icons/icons'
addIcons(PrTrash)
import App from './App.vue'
const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
