import {createRouter, createWebHashHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import chatVue from './components/chat.vue'
import HelloWorldVue from './components/HelloWorld.vue'
import UserVue from './components/User.vue'
import NotFound from './components/NotFound.vue'
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: chatVue,
  },
  {
    path: "/hello",
    name: "hello",
    component: HelloWorldVue
  },
  {
    path: "/users/:id?",
    component: UserVue,
    name: "user_id"
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

]
const reouter = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default reouter
