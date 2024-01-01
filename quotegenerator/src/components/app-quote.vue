<script setup>
  const {newQuote} = defineProps({
    newQuote: {
      type: String,
      required: true,
      default: 'Hola imagina que esta es una frase graciosa de chuck norris'
    }
  });
</script>
<template>
  <div class="quoteText">
    <p> "{{ newQuote }}" </p>
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
        width: 600px;
}
@media screen and (max-width: 600px) {
  .quoteText{
    max-width: 300px;
  }
}
</style>