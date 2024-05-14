<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import leftNav from '@/components/navbar/leftNav.vue';


</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar
      title="Aplikasi Penjadwalan Kuliah"
      scroll-behavior="fade-image"
      image="../src/assets/images/navBarImg.jpg"
      theme="white"
      permanent
      expand-on-hover
      rail
    ></v-app-bar>

    <leftNav/>
    

    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <RouterView />
    </v-main>
  </v-layout>

  
</template>


<style>
.v-layout {
  display: block !important;
}

</style>

