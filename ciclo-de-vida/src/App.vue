<script setup lang="ts">
import appCategories from './components/appCategories.vue';
import AppMountedd from './components/app-mountedd.vue';
import appCaracteres from './components/app-caracteres.vue';
import {ref} from 'vue'
const information = ref({
  titles: true,
  images: false
});
const hanldeBoolean = (cuality: boolean) =>{
  information.value.titles = !information.value.titles;

}
</script>

<template>
  <h1>Hola mundo</h1>
  <p v-custom-size.red="'lg'">hola</p>
    <appCaractere-s :itsActive="information.titles" >
      <AppMountedd  />
  </appCaractere-s>
  <appCaracteres :itsActive="information.images">
    <appCategories />
  </appCaracteres>
</template>

<style scoped>

</style>
