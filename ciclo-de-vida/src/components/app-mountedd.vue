<script lang="ts" >
import {defineComponent} from 'vue';
import { getProducts } from '../services/mproducts';

export default defineComponent({
    data(){
        return {user: '', products: []};
    },
    mounted(){
        getProducts('https://api.escuelajs.co/api/v1/products', 'title').then(p => this.products = p);

    },

})
</script>
<template>
    <div>
        <h1>Hola desde montued</h1>
        <p v-for="(product, index) of products" :key="`${product}${index}`">{{ product }}</p>
</div>
</template>
<style scoped>
    
</style>