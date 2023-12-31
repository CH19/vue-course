<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {getProducts} from '../services/mproducts';
let pricesProducts = ref([]);
onMounted(()=>{
    getProducts('https://api.escuelajs.co/api/v1/products', 'price').then(p => pricesProducts.value = p);
})
</script>
<template>
    <div>
        <h1>Estos son los precios de los productos</h1>
        <p v-for="(price, index) of pricesProducts" :key="price + index">{{ price  }}</p>
    </div>
</template>
<style scoped>
    
</style>