<script setup lang="ts">
import teacherForm from './components/teacherForm.vue';
import Tabla from './components/Tabla.vue';
import allTeachers from './assets/teachers.json';
import {ref} from 'vue';
import { Teacher } from './types';

const todos = ref(allTeachers);
const addTeacher = (data: Teacher) =>{
  console.log(data);
  todos.value.push(data);
}
</script>

<template>
  <!-- <formu /> -->
  <teacherForm @data="addTeacher" />
  <Tabla :teachers="todos" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
