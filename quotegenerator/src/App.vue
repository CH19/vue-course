<script setup>
import appQuote from './components/app-quote.vue';
import appSaying from './components/app-saying.vue';
import appReload from './components/app-reload.vue';
import algo from './components/algo.vue';
import {ref, provide, watch, onUpdated} from 'vue';
const data = ref('xd')
const quoteActualization = ref('');
const actualizar = (data) => {
    quoteActualization.value = data
};

</script>
<template>
    <input type="text" v-model="data">
    {{ data }}
    <algo />
    <appReload @quote-reload="actualizar"/>
    <appQuote :new-quote="quoteActualization" />
    <appSaying />
    
</template>
<style scoped>
    
</style>