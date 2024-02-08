  <template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="QR Generator">
      <template v-slot:prepend>
      </template>
    </v-app-bar>

    <v-main class="d-flex align-center w-100 justify-center" style="min-height: 300px;">
      <chat />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
  import menuvv from './components/menuvv.vue';
  import chat from './components/chat.vue';

</script>
<style scoped>
  @media screen and (width > 700px) {
    v-app-bar-nav-icon{
      display: none;
    }
  }
</style>
