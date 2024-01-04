<script lang="ts" setup>
import { todosTasks } from '@/services/functions'
import appList from './app-list.vue'
import type { Options } from '@/types'
import { ref, watch } from 'vue'

const { option } = defineProps<{
  option: Options
}>()
const newTodoTasks = ref(todosTasks)
const allCompleted = ref(true)
const deletedElement = (element: string) => {
  console.log(element)
  todosTasks.value.delete(JSON.parse(element))
}
const deletedAll = () => {
  newTodoTasks.value.forEach((value, key) => {
    newTodoTasks.value.delete(key)
  })
}
watch(
  newTodoTasks,
  (actual) => {
    allCompleted.value = Array.from(actual.values()).some((e) => !e.completed)
  },
  {
    deep: true
  }
)
</script>
<template>
    <div class="items-container">
        <transition-group name="list" tag="appList">
    <div v-for="[_key, todo] of newTodoTasks" :key="_key">
      <appList :option="option" @id-completed="deletedElement" :data="todo" />
    </div>
  </transition-group>
  <Transition name="slide-fade">
    <div v-if="!allCompleted && newTodoTasks.size > 1" @click="deletedAll" class="deleted-all">
      Deleted All
    </div>
  </Transition>
    </div>

</template>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.deleted-all {
  background-color: var(--vt-blue);
  color: var(--vt-c-white-soft);
  width: fit-content;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    background-color: crimson;
    transition: all ease-in-out 0.1s;
  }
}
</style>
