/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import reouter from './router'
import vuetify from './plugins/vuetify'
import {OhVueIcon,addIcons} from 'oh-vue-icons'

import { CoMoon, CoSun  } from "oh-vue-icons/icons";

const app = createApp(App)

addIcons(CoMoon, CoSun)

app.use(vuetify)
app.use(OhVueIcon)
app.component("vv-icon", OhVueIcon)
app.use(reouter)

app.mount('#app')
