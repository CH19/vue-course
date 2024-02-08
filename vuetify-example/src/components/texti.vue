<script lang="ts" setup>
import {computed} from 'vue'
import {capitalize} from 'lodash'
const {content} = defineProps<{
  content: string
}>()
const new_content = computed(()=>{
  return capitalize(content)
})
</script>
<template>
  <div>
    <v-card class="my-1 bg-green-accent-1 rounded w-100" max-width="300px" variant="text">
          <v-card-text class="text-black text-sm">
            {{ new_content }}
          </v-card-text>
        </v-card>
  </div>
</template>
<style scoped>
  v-card-text{
  }
</style>
