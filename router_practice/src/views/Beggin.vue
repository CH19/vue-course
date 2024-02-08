<script lang="ts" setup>
    import Saludo from '@/components/Saludo.vue';
    import Password from '@/components/Password.vue';
    const {userName} = defineProps<{
        userName?: string
    }>()
    const user = userName ?? "Usuario"
</script>
<template>
    <Saludo :message="`Hola ${user}`"></Saludo>
    <Password />
    <p>Vida</p>
</template>
<style scoped>
    
</style>