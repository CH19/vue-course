<script lang="ts" setup>
import appTodo from './components/app-todo.vue'
import appMenu from './components/app-menu.vue'
import appInput from './components/app-input.vue'
import appLitItem from './components/app-lit-item.vue'
import { todosTasks } from './services/functions'
import type { Todo, Options } from './types'
import { ref } from 'vue'
let newTask: Todo = {
  id: '',
  task: '',
  completed: false,
  added: ''
}
const optionMenu = ref<Options>('all')
const addTask = (data: string) => {
  console.log(data)
  newTask = JSON.parse(data)
  todosTasks.value.set(newTask.id, newTask)
}
const slectedOption = (data: Options) => (optionMenu.value = data)
</script>
<template>
  <header>
    <appTodo />
    <appMenu @filters="slectedOption" />
  </header>
  <main>
    <appInput @add-task="addTask" />
    <appLitItem :option="optionMenu" :toods-tasks="todosTasks" />
  </main>
</template>
<style scoped></style>
