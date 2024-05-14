<template>
    <v-container fluid class="bordered" style="display: flex; flex-direction: column; align-items: center;">
      <!-- title start -->
      <h1 class="title" v-html="title"></h1>
      <!-- title end -->
      <v-card class="formDosen" width="650" title="Entry Data Dosen">
        <v-container>
          <v-text-field
            v-model="dosen.nidn"
            color="dark"
            label="NIDN"
            variant="underlined"
            clearable
          ></v-text-field>
  
  
          <v-text-field
            v-model="dosen.nama"
            color="dark"
            label="Nama Dosen"
            variant="underlined"
          ></v-text-field>
        </v-container>
        <v-btn @click="tambahDosen" prepend-icon="$vuetify" class="mb-4 ml-4"> Submit </v-btn>
      </v-card>
      <!-- Tampilkan daftar Dosen -->
      <div v-for="(dosen, index) in daftarDosen" :key="index" class="tampilData">
        <v-btn class="p-3" @click="hapusDosen(index)">delete</v-btn>
        &emsp;{{ dosen.nidn }}&ensp; - &ensp;{{ dosen.nama }}
        <v-divider class="garis"></v-divider>
        <br>
      </div>
    </v-container>
  </template>
  
  <script>
  import { Dosen } from '../../models/dosen'
  
  export default {
    data() {
      return {
        dosen: new Dosen(0, ''),
        daftarDosen: [],
        title: 'Entry Data Dosen'
      }
    },
    methods: {
      tambahDosen() {
        let pesanError = ''
        if (!this.dosen.nidn && !this.dosen.nama) {
          pesanError = 'Semua field harus diisi!'
        } else if (!this.dosen.nidn) {
          pesanError = 'Field NIDN harus diisi!'
        } else if (!this.dosen.nama) {
          pesanError = 'Field Nama dosen harus diisi!'
        }
  
        if (pesanError) {
          alert(pesanError)
        } else {
          this.daftarDosen.push({ ...this.dosen })
          alert('Data Dosen Berhasil ditambahkan')
          this.dosen = new Dosen('', '') // Reset form
        }
      },
      hapusDosen(index) {
        this.daftarDosen.splice(index, 1);
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
  
  .formDosen {
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
  