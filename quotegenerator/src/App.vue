<script setup>
import appQuote from './components/app-quote.vue';
import appSaying from './components/app-saying.vue';
import appReload from './components/app-reload.vue';

import {getDataJson, getData} from './services/quotes';
import {ref, onMounted} from 'vue';
const quote = ref('');
  onMounted(() => {
    getDataJson().then(e => {quote.value = e.data.joke;}).catch(e=> console.error(e));
  });
const actualizar = (data) => {
    quote.value = data
};
</script>
<template>
    <appReload @quote-reload="actualizar"/>
    <appQuote :new-quote="quote" />
    <appSaying />
    
</template>
<style scoped>
    
</style>