<script lang="ts" setup>
// import texti from './texti.vue';
import {ref } from 'vue'
import {toCanvas} from "qrcode"
const message = ref("")
const dowload_image = ref(false)
const contents = ref<string[]>([])
const addMessage = () => {
  if(!message.value) return
  contents.value.push(message.value)
  dowload_image.value = true
  toCanvas(document.getElementById("canvas"), message.value, (error: string) => {
    if(error) return console.error(error)
    console.log("succes")
  })
  message.value = ""
}
const dowload_qr = () => {
  const enlace = document.createElement("a")
  enlace.download = message.value
  enlace.href = document.getElementById("canvas").toDataURL()
  enlace.click()
  document.removeChild(enlace)
}
const linkData = (str: string) => {
  message.value = str
  addMessage()
}
</script>
<template>
  <div class="chat-container">
      <div class="message my-2">
        <v-text-field hide-details="auto" max-width="640" type="text" label="Escribe un link" @keyup.enter="addMessage" v-model="message" />
        <v-btn text="Send" class="h-100" @click="addMessage"></v-btn>
      </div>
      <v-divider class="border-opacity-100 my-4"></v-divider>
      <canvas id="canvas"></canvas>
      <v-btn v-if="dowload_image" class="my-4" text="Descargar" @click="dowload_qr"></v-btn>
      <v-divider class="border-opacity-100 my-2" />
      <div v-if="dowload_image">
        <v-text class="text-h4">Lista de Links</v-text>
        <div v-for="content of contents">
          <texti class="cursor-pointer" :content="content" @click="linkData(content)" />
        </div>
      </div>
</div>
</template>
<style scoped>
  .chat-container{
    display: flex;
    flex-direction: column;

  }
  .message{
    width: 300px;
    display: grid;
    grid-template-columns: 1.5fr .5fr;
    align-items: center;
    gap: 5px ;
  }
</style>
