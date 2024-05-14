<template>
    <v-container fluid class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-12">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="4">
          <v-card
            class="mx-auto mb-6"
            style="position: absolute; top: 190px; left: 400px"
            prepend-icon="$vuetify"
            subtitle="Tugas UTS PBO 2"
            width="700"
          >
            <template v-slot:title>
              <span class="font-weight-black">Selamat Datang Di Aplikasi</span>
            </template>
  
            <v-card-text class="bg-surface-light pt-4">
              <div class="text-h5 mb-2">Aplikasi ini dibuat oleh:</div>
              <div class="text-subtitle-2">Npm : 40622170001</div>
              <div class="text-subtitle-2">Nama : Defri Fauzi Ghilman</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        message: 'Selamat Datang Di Aplikasi'
      }
    }
  }
  </script>
  