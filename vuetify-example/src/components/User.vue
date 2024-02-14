<script lang="ts" setup>
import {ref, onMounted, watch} from 'vue'
import {useRoute} from 'vue-router'
const route = ref(useRoute())
const actualImage = ref("")

const data = ref<{
  "id": number,
  "title": string,
  "price": number,
  "description": string,
  "category": {
    "id": number,
    "name": string,
    "image": string
  },
  "images": string[]

}>({
  "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
    "images": [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017"
    ]
  }
)
onMounted(()=> {
  fetch(`https://api.escuelajs.co/api/v1/products/${route.value.params.id}`).then(res => res.json())
  .then(e => {data.value = e; console.log(e); actualImage.value = data.value.images[0]})
  .catch(e => console.error(e))
  .finally(() => console.log("success"))


})
watch(route.value.params, (act) => {
  location.reload()
}, {deep: true})
const changeImg = (new_img: string) => {
  actualImage.value = new_img
}
</script>
<template>
    <div>
        <h1 class="text-success">Bienvenido {{ $route.params.id }}</h1>
        <v-card hover width="800" class="w-sm-50" :title="data.title" v-if="data">
          <v-row
            align="center"
            justify="center"
          >
          <v-col cols="2">
              <v-row
              width="100"
              class="my-2"
              v-for="img of data.images">
                <v-img
                :src="img"
                :lazy-src="img"
                cover
                hover
                height="100"
                class="rounded"
                @click="changeImg(img)"
                >
                <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>
                </v-img>

              </v-row>
          </v-col>
           <v-col
           cols="5"
           >
            <v-img
            cover
          rounded
            :lazy-src="data.images[0]"
          :src="actualImage"
          class="w-100"
            >
            <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>
          </v-img>
           </v-col>
           <v-col
           cols="3">
            <v-tex class="text-h4">Description</v-tex>
             <v-text
              class="h-50"
             >{{ data.description }}</v-text>
            <v-card-footer class="mx-2 my-2">
              <v-btn class="w-100">
                Buy Product
              </v-btn>
            </v-card-footer>
           </v-col>
          </v-row>
        </v-card>
    </div>
</template>
<style scoped>

</style>
