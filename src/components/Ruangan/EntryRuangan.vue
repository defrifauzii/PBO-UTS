<template>
    <v-container fluid class="bordered" style="display: flex; flex-direction: column; align-items: center;">
      <!-- title start -->
      <h1 class="title" v-html="title"></h1>
      <!-- title end -->
      <v-card class="formRuangan" width="650" title="Entry Data Ruangan">
        <v-container>
          <v-text-field
            v-model="ruangan.code"
            color="dark"
            label="Kode Ruangan"
            variant="underlined"
          ></v-text-field>
  
          <v-text-field
            v-model="ruangan.nama"
            color="dark"
            label="Nama Ruangan"
            variant="underlined"
          ></v-text-field>
        </v-container>
        <v-btn @click="tambahRuangan" prepend-icon="$vuetify" class="mb-4 ml-4"> Submit </v-btn>
      </v-card>
      <!-- Tampilkan daftar ruangan -->
      <div v-for="(ruang, index) in daftarRuangan" :key="index" class="tampilData">
        <v-btn class="p-3" @click="hapusRuangan(index)">delete</v-btn>
        &emsp;{{ ruang.code }}&ensp; - &ensp;{{ ruang.nama }}
        <v-divider class="garis"></v-divider>
        <br>
      </div>
    </v-container>
  </template>
  
  <script>
  import { Ruangan } from '../../models/ruangan'
  
  export default {
    data() {
      return {
        ruangan: new Ruangan('', ''),
        daftarRuangan: [],
        title: 'Entry Data Ruangan'
      }
    },
    methods: {
      tambahRuangan() {
        let pesanError = ''
        if (!this.ruangan.code && !this.ruangan.nama) {
          pesanError = 'Semua field harus diisi!'
        } else if (!this.ruangan.code) {
          pesanError = 'Field Kode Ruangan harus diisi!'
        } else if (!this.ruangan.nama) {
          pesanError = 'Field Nama Ruangan harus diisi!'
        }
  
        if (pesanError) {
          alert(pesanError)
        } else {
          this.daftarRuangan.push({ ...this.ruangan })
          alert('Data Ruangan Berhasil ditambahkan')
          this.ruangan = new Ruangan('', '') // Reset form
        }
      },
      hapusRuangan(index) {
        this.daftarRuangan.splice(index, 1);
      }
    }
  }
  </script>
  
  <style>
  .title {
    color: white;
    text-decoration: underline;
    text-shadow: 1px 1px 2px rgba(234, 231, 231, 0.8);
    text-align:center;
    margin-top: 20px; /* Atur margin atas */
  }
  
  .formRuangan {
    margin-top: 20px; /* Atur margin atas */
  }
  
  .tampilData {
    width: 450px;
    padding: 3px;
    margin-top: 10px; /* Tambahkan margin atas untuk memberi jarak antar item */
  }
  
  .tampilData .garis {
    color: red;
  }
  </style>
  