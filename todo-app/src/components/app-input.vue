<script lang="ts" setup>
import { ref } from 'vue'
import type { Todo } from '@/types'
import { uuid } from 'vue-uuid'

const emits = defineEmits(['addTask'])
const newTod = ref('')
let newTodo: Todo = {
  id: '',
  task: '',
  completed: false,
  added: ''
}
const createTask = () => {
  if (newTodo.task == newTod.value) return alert('Tarea ya existente')
  if (newTod.value.length < 3) return alert('La tarea no debe estar vacia')
  newTodo.id = String(uuid.v1())
  newTodo.task = newTod.value
  newTodo.added = String(new Date())
  // todosTasks.value.set(newTodo.id, newTodo);
  emits('addTask', JSON.stringify(newTodo))
  newTod.value = ''
}
const createTaskEnter = (event: KeyboardEvent) => {
  if (event.key.toLowerCase() === 'enter') return createTask()
}
</script>
<template>
  <div class="input-container">
    <input placeholder="add a new task" type="text" v-model="newTod" @keypress="createTaskEnter" />
    <button @click.prevent="createTask">Add</button>
  </div>
</template>
<style scoped>
.input-container {
  width: 100vw;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  padding: 20px;
  gap: 0.5rem;
}
.input-container > input[type='text']:first-of-type {
  padding: 4px 10px;
  &:focus-visible {
    outline: none;
  }
}
.input-container button:first-of-type {
  width: 50%;
  border: none;
  background-color: var(--vt-blue);
  color: var(--vt-c-white-soft);
  cursor: pointer;
  &:active {
    opacity: 50%;
  }
}
</style>
