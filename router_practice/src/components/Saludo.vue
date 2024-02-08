<script lang="ts" setup>
const {message} = defineProps<{
    message: string
}>()
</script>
<template>
    <div>
        <h1>{{ message }}</h1>
    </div>
</template>
<style scoped>
    
</style>