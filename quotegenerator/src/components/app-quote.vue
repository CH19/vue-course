<script setup>
  import {ref, onMounted, computed} from 'vue'
  import {getDataJson, getData} from '../services/quotes';
  const {newQuote} = defineProps({
    newQuote: {
      type: String,
      required: true,
    }
  });
  const quote = ref(newQuote);
  onMounted(() => {

    getDataJson().then(e => {quote.value = e.data.joke;}).catch(e=> console.error(e));
  });
  const actualQuote = computed(()=> {
    console.log(`new lenght = ${newQuote.length}`);
    return newQuote.length > 4 ? newQuote : quote;
  })
</script>
<template>
  {{ newQuote }}
  <div class="quoteText">
    <p>{{ actualQuote }}</p>
  </div>
</template>
<style scoped>
    .quoteText{
        padding: 1rem;
        padding-left: 2rem;
        border-left: .5rem solid #F7DF94;
        border-radius: 0 20px 20px 0;
    background: #fff;
    box-shadow:  22px 22px 44px #bcbcbc,
    -22px -22px 44px #ffffff;
        height: 10rem;
        display: grid;
        place-items: center;
}
</style>