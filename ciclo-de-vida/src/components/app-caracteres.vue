<script lang="ts" setup>
import {ref, Ref} from 'vue'
let {itsActive} = defineProps<{
    itsActive: boolean
}>();
const actual: Ref<boolean> = ref<boolean>(itsActive) 
const hanldeBoolean = () => {
    actual.value = !actual.value;
}
</script>
<template>
    <section>
        <button @click="hanldeBoolean">{{ actual ? 'Ocultar' : 'Mostrar' }}</button>
        <slot v-if="actual"></slot>
        <div ></div>
    </section>
</template>

