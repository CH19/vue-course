<script lang="ts" setup>
import { ref } from 'vue'
import type { Todo, Options } from '@/types'
const emits = defineEmits(['idCompleted'])
const {
  data = {
    task: '',
    completed: false,
    id: '',
    added: new Date().toString()
  },
  option
} = defineProps<
  Partial<{
    data: Todo
    option: Options
  }>
>()
const newData = ref(data)
const deleteElement = () => {
  emits('idCompleted', JSON.stringify(newData.value.id))
}
</script>
<template>
  <div
    class="todo-container"
    v-if="
      option == 'all' ||
      (option == 'active' && !newData.completed) ||
      (option == 'completed' && newData.completed)
    "
  >
    <div class="todo-item">
      <input type="checkbox" v-model="newData.completed" />
      <p :class="`${newData.completed ? 'completed' : ''}`">{{ newData.task }}</p>
    </div>
    <div class="todo-trash" v-if="newData.completed">
      <div @click="deleteElement">
        <v-icon animation="wrench" hover="true" title="delete task"  name="pr-trash"></v-icon>
      </div>
    </div>
  </div>
</template>
<style scoped>
.todo-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.todo-item {
  display: flex;
  gap: 1rem;
  padding: 5px;
}
.todo-trash {
  & div {
    width: fit-content;
    padding: 2px;
    border-radius: 40px;
    cursor: pointer;
    &:active {
      background-color: #e7e0e0;
    }
  }
}
.completed {
  text-decoration-line: line-through;
}
</style>
