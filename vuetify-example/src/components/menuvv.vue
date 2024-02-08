<script setup lang="ts">
  const method = () => {
    alert("Hola mundo")
  }
</script>
<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
      text="Opcciones"
      color="green"
      v-bind="props"
        variant="outlined"
      ></v-btn>
    </template>

    <v-list>
    <v-list-item v-for="(i) of 5" @click="method">
      <v-list-item-title>{{ `Option ${i}` }}</v-list-item-title>
    </v-list-item>
    </v-list>
  </v-menu>
</template>
