<script lang="ts" setup>
// import texti from './texti.vue';
import {ref } from 'vue'
import {toCanvas} from "qrcode"
import { CanvasHTMLAttributes } from 'vue';
const message = ref("")
const dowload_image = ref(false)
const contents = ref<string[]>([])
const addMessage = (str: string, arr: string[] = contents.value) => {
  if(!str) return
  if(!arr.some((element) => element.toLowerCase() === str.toLowerCase()))  arr.push(str)
  dowload_image.value = true
  toCanvas(document.getElementById("canvas"), str, (error: string) => {
    if(error) return console.error(error)
    console.log("succes")
  })
  str = ""
  message.value = ("")
}
const dowload_qr = () => {
  const enlace = document.createElement("a")
  enlace.download = message.value
  const canvas = document.getElementById("canvas") 
  if(!canvas) return
  enlace.href = canvas.toDataURL()
  enlace.click()
  document.removeChild(enlace)
}
</script>
<template>
  <div class="chat-container">
      <div class="message my-2">
        <v-text-field hide-details="auto" max-width="640" type="text" label="Escribe un link" @keyup.enter="addMessage(message)" v-model="message" />
        <v-btn text="Send" class="h-100" @click="addMessage(message)"></v-btn>
      </div>
      <v-divider class="border-opacity-100 my-4"></v-divider>
      <div class="canvas-cont">
        <canvas id="canvas"></canvas>
      </div>
      <v-btn v-if="dowload_image" class="my-4" text="Descargar" @click="dowload_qr"></v-btn>
      <v-divider class="border-opacity-100 my-2" />
      <div v-if="dowload_image">
        <v-text class="text-h4">Lista de Links</v-text>
        <div v-for="content of contents">
          <texti class="cursor-pointer" :content="content" @click="addMessage(content)" />
        </div>
      </div>
</div>
</template>
<style scoped>
  .chat-container{
    display: flex;
    flex-direction: column;

  }
  .canvas-cont{
    width: 100%;
    display: grid;
    place-content: center;
  }
  .message{
    width: 300px;
    display: grid;
    grid-template-columns: 1.5fr .5fr;
    align-items: center;
    gap: 5px ;
  }
</style>
