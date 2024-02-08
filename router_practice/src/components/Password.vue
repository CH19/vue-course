<script lang="ts" setup>
    import {ref, computed} from "vue"
    const newPassowrd = ref("")
    const values = ["", "weak", "medium", "more", "strong"]
    const message_password = computed(()=> {
        let indicator = 0
        if(/[a-z]/.test(newPassowrd.value) ) indicator++
        if(/[A-Z]/.test(newPassowrd.value)) indicator++
        if(/\d/.test(newPassowrd.value)) indicator++
        if(/[^a-zA-Z-0-9]/.test(newPassowrd.value)) indicator ++
        return values[indicator]
    })
</script>
<template>
    <div>
        <input maxlength="16" placeholder="Introduce una contraseña" type="text" v-model="newPassowrd">
        <p>{{ message_password }}</p>
    </div>
</template>
<style scoped>
    
</style>