  <template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="QR Generator">
        <v-btn @click="toogleTheme"><vv-icon :name="actualTheme"></vv-icon></v-btn>
        <v-menu>
          <template v-slot:activator="{props}">
            <v-btn
            v-bind="props"
            >
              Options
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="opt of routes">
              <RouterLink  :to="{name: opt.name}"><v-btn class="text-darken-1" variant="text">{{ opt.name }}</v-btn></RouterLink>
            </v-list-item>


          </v-list>

        </v-menu>
    </v-app-bar>

    <v-main class="d-flex align-center w-100 justify-center" style="min-height: 300px;">
      <RouterView/>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import {routes} from './router';
import {useTheme} from 'vuetify'
import {computed} from 'vue'

const theme = useTheme()
const actualTheme = computed(()=> {
  return theme.global.current.value.dark ? "co-sun" : "co-moon"
})
function toogleTheme(){
  console.clear
  console.log(theme.global.name.value)
  theme.global.name.value = actualTheme.value == 'co-sun' ? 'light' : 'dark'
}
</script>
<style scoped>
  a{
    text-decoration: none;
    color: light-dark(#000, #fff);
  }
</style>
