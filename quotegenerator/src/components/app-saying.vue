<script setup>
import appArrowRight from './app-arrow-right.vue';
const {person} = defineProps({
    sayQuote: {
        type: String,
        required: false,
        default: 'Chuck Norris'
    },
    charge: {
        type: String,
        required: false,
        default: 'Actor',
    }
})
</script>
<template>
    <section class="saying">
        <div>
            <h3>{{ sayQuote }}</h3>
        <p>{{ charge }}</p>
        </div>
        <appArrowRight />
    </section>
</template>
<style scoped>
    .saying{
        max-width: 800px;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        &:hover{
            color: #fff;
        background-color: #070707;
        transition: all ease-in .4s;
        }
    }
</style>