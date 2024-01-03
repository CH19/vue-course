<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useOver } from '../services/functions'
const options = ['all', 'active', 'completed']
const emits = defineEmits(['filters'])
onMounted(() => {
  mouse.value.widthScreen = `${window.screen.availWidth}px`
})
const mouse = ref({
  x: 0 + 'px',
  y: 0 + 'px',
  width: 0 + 'px',
  widthScreen: ''
})
const over = (event: MouseEvent, value: string) => {
  useOver(event, mouse)
  emits('filters', value)
}
</script>
<template>
  <nav class="todo-nav">
    <div @click.stop="over($event, option)" v-for="option of options" :key="option">
      <p>{{ option }}</p>
    </div>
  </nav>
  <div class="nav-selecetd"></div>
</template>
<style scoped>
.todo-nav {
  padding: 1rem;
  max-width: 800px;
  width: v-bind('mouse.widthScreen');
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid var(--vt-c-black-mute);
  text-align: center;
  & > div {
    flex-grow: 1;
    display: grid;
    place-content: center;
    grid-template-columns: 1fr;
    text-align: center;
  }
}
.nav-selecetd {
  width: v-bind('mouse.width');
  height: 5px;
  background-color: var(--vt-blue);
  border-radius: 40% 40% 0 0;
  position: absolute;
  left: 0;
  transform: translateX(v-bind('mouse.x')) translateY(-5px);
  transition: transform ease-in 0.2s;
}
</style>
