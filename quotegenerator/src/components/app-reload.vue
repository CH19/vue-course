<script  setup>
import {getData, getDataJson} from '../services/quotes';
const emits = defineEmits(['quoteReload']);
const actualizarQuote = () => {
 
    getDataJson(   {
    "data":{
        "joke": "There is no chin behind Chuck Norris' beard. There is only another fist."
    }
}).then(e => emits('quoteReload', e.data.joke)).catch(e=> console.error(e));
};
</script>
<template>
    <div class="reload" @click="actualizarQuote">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
</div>
</template>
<style scoped>
    .reload{
        position: absolute;
        right: 2rem;
        top: 1rem;
        border-radius: 30%;
        padding: 2px;
        cursor: pointer;
        &:active{
            background-color: #000;
            color: #fff;
            transition: all ease-in .1s;
            opacity: 80%;
            
        }
    }
    @media screen and (max-width: 600px) {
        .reload {
            right: 1rem;
            & svg{

                width: 1rem;
                height: 1rem;
            }
        }
    }
</style>