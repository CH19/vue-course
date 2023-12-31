<template >
    <div>
        <h1>Hola mundo</h1>
        <label for="name">Cositas</label>
        <input type="text" id="name" placeholder="Escribe algo" v-model="text" >
        <input type="checkbox" v-model="agree" checked="true" :value="agree">
        <br/>
        <select>
            <option v-for="pais, index of paises" :key="index" :value="pais" @click="aviso(pais)">{{ pais }}</option>
        </select>
        <br />
        <button @click="aviso(text)">Avisar</button>
        <h4>{{ text }}, {{ agree }}</h4>
    </div>
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        data(){
            return {
            text: '',
             agree: true, 
             paises:  ['Venezuela', 'Colombia', 'Brasil', 'Argentina'] 
            };
        },
        methods: {
            aviso(avisar: string){
                alert(`Que tan concentrado estas ${avisar}`);
            }
        }
})
</script>
<style scoped >
    h1{
        background: red;
    }
</style>