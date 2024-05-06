<template>
    <div>
      <h1>Entry Data Mahasiswa</h1>
      <!-- Models Database Start -->
      <v-text-field clearable  prepend-icon="$vuetify" v-model="mhs.npm" label="NPM" variant="outlined"></v-text-field>
      <v-text-field clearable  prepend-icon="$vuetify" v-model="mhs.nama" label="Nama" variant="outlined"></v-text-field>
      <v-text-field clearable  prepend-icon="$vuetify" v-model="mhs.ipk" label="Ipk" variant="outlined"></v-text-field>
  
      <v-fab extended prepend-icon="$vuetify" text="SUBMIT" @click="alertMhs"></v-fab>
      <!-- Models Database End-->
      <br />
      <br />
  
      <!-- Tampilkan nilai hanya jika showNilai bernilai true -->
      <p v-if="showNilai">Npm: {{ mhs2.npm }}</p>
      <p v-if="showNilai">Nama: {{ mhs2.nama }}</p>
      <p v-if="showNilai">Ipk: {{ mhs2.ipk }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { Mahasiswa } from '@/model/Mahasiswa.ts'
  
  export default {
    data() {
      return {
        mhs: new Mahasiswa('', '', 0),
        showNilai: false,
        mhs2: {}
      }
    },
  
    methods: {
      rubahNilai() {
        this.nilai = ''
        setTimeout(() => {
          this.nilai = ''
        }, 1000)
      },
      alertMhs() {
        if (!this.mhs.npm) {
          alert('isi NPM terlebih dahulu!')
        } else if (!this.mhs.nama) {
          alert('isi Nama terlebih dahulu!')
        } else if (!this.mhs.ipk) {
          alert('isi IPK terlebih dahulu!')
        } else if (parseFloat(this.mhs.ipk) < 0 || parseFloat(this.mhs.ipk) > 4) {
          alert('isi Nilai IPK dengan benar!')
        } else {
          alert(`${this.mhs.nama} berhasil ditambahkan`)
          this.mhs2 = this.mhs
          this.showNilai = true
          setTimeout(() => {
            this.mhs = ''
          }, 1000)
        }
      }
    },
  
    mounted() {
      console.log(`The initial count is ${this.mhs}.`)
      console.log(`The initial count is ${this.mhs2}.`)
    }
  }
  </script>