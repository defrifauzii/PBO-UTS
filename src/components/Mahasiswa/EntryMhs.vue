<template>
    <v-container
      fluid
      class="bordered"
      style="display: flex; flex-direction: column; align-items: center"
    >
      <!-- title start -->
      <h1 class="title" v-html="title"></h1>
      <!-- title end -->
      <v-card class="formMahasiswa" width="650" title="Entry Data Mahasiswa">
        <v-container>
          <v-text-field
            v-model="mhs.npm"
            color="dark"
            label="NPM"
            variant="underlined"
            clearable
          ></v-text-field>
  
          <v-text-field
            v-model="mhs.nama"
            color="dark"
            label="NAMA"
            variant="underlined"
          ></v-text-field>
  
          <v-text-field
            v-model="mhs.ipk"
            color="dark"
            label="IPK"
            variant="underlined"
            clearable
          ></v-text-field>
        </v-container>
        <v-btn @click="tambahMahasiswa" prepend-icon="$vuetify" class="mb-4 ml-4"> Submit </v-btn>
      </v-card>
      <!-- Tampilkan daftar ruangan -->
      <div v-for="(mhs, index) in daftarMahasiswa" :key="index" class="tampilData">
      <v-btn class="p-3" @click="hapusMahasiswa(index)">delete</v-btn>
      &emsp;{{ mhs.npm }}&ensp; - &ensp;{{ mhs.nama }}&ensp; - &ensp;{{ mhs.ipk }}
      <v-divider class="garis"></v-divider>
      <br />
    </div>
    </v-container>
  </template>
  
  <script>
  import { Mahasiswa } from '../../models/mahasiswa'
  
  export default {
    data() {
      return {
        mhs: new Mahasiswa(0, '', 0),
        daftarMahasiswa: [],
        title: 'Entry Data Mahasiswa'
      }
    },
    methods: {
    tambahMahasiswa() {
      let pesanError = '';
      // Cek jika semua field tidak diisi
      if (!this.mhs.npm && !this.mhs.nama && !this.mhs.ipk) {
        pesanError = 'Semua field harus diisi!';
      }
      // Cek jika dua field tidak diisi
      else if (!this.mhs.npm && !this.mhs.nama) {
        pesanError = 'Field NPM dan NAMA harus diisi!';
      } else if (!this.mhs.npm && !this.mhs.ipk) {
        pesanError = 'Field NPM dan IPK harus diisi!';
      } else if (!this.mhs.nama && !this.mhs.ipk) {
        pesanError = 'Field NAMA dan IPK harus diisi!';
      }
      // Cek jika hanya satu field yang tidak diisi
      else if (!this.mhs.npm) {
        pesanError = 'Field NPM harus diisi!';
      } else if (!this.mhs.nama) {
        pesanError = 'Field NAMA harus diisi!';
      } else if (!this.mhs.ipk) {
        pesanError = 'Field IPK harus diisi!';
      }
      // Cek validitas nilai IPK
      else if (parseFloat(this.mhs.ipk) < 0 || parseFloat(this.mhs.ipk) > 4) {
        pesanError = 'Nilai IPK harus berada di antara 0 dan 4!';
      }
  
      // Tampilkan pesan error atau tambahkan data mahasiswa
      if (pesanError) {
        alert(pesanError);
      } else {
        this.daftarMahasiswa.push({ ...this.mhs });
        alert('Data Mahasiswa Berhasil ditambahkan');
        this.mhs = new Mahasiswa('', '', ''); // Reset form
      }
    },
    hapusMahasiswa(index) {
      this.daftarMahasiswa.splice(index, 1);
    }
  }
  
  
  }
  </script>
  
  <style>
  .title {
    color: white;
    text-decoration: underline;
    text-shadow: 1px 1px 2px rgba(234, 231, 231, 0.8);
    text-align: center;
    margin-top: 20px; /* Atur margin atas */
  }
  
  .formMahasiswa {
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
  