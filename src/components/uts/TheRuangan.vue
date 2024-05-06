<template>
    <div>
      <h1>Entry Data Ruangan</h1>
      <!-- Models Database Start -->
      <v-text-field clearable  prepend-icon="$vuetify" v-model="ruangan.code" label="Kode Ruangan" variant="outlined"></v-text-field>
      <v-text-field clearable  prepend-icon="$vuetify" v-model="ruangan.nama" label="Nama Ruangan" variant="outlined"></v-text-field>
  
      <v-fab extended prepend-icon="$vuetify" text="SUBMIT" @click="alertRu"></v-fab>
      <!-- Models Database End-->
      <br />
      <br />
  
      <!-- Tampilkan nilai hanya jika showNilai bernilai true -->
      <p v-if="showNilai">code: {{ ruangan2.code }}</p>
      <p v-if="showNilai">Nama: {{ ruangan2.nama }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { Ruangan } from '@/model/Ruangan.ts'
  
  export default {
    data() {
      return {
        count: 0,
        nilai: '',
        ruangan: new Ruangan('', '', 0),
  
        showNilai: false,
        ruangan2: {}
      }
    },
  
    methods: {
      increment() {
        this.count++
      },
      rubahNilai() {
        this.nilai = ''
        setTimeout(() => {
          this.nilai = ''
        }, 1000)
      },
      alertRu() {
        if (!this.ruangan.code) {
          alert('isi Field Kode Ruangan!')
        } else if (!this.ruangan.nama) {
          alert('isi Field Nama Ruangan!')
        } else {
          alert(`${this.ruangan.nama} berhasil ditambahkan`)
          this.ruangan2 = this.ruangan
          this.showNilai = true
          setTimeout(() => {
            this.ruangan = ''
          }, 1000)
        }
      }
    },
  
    mounted() {
      console.log(`The initial count is ${this.ruangan}`)
      console.log(`The initial count is ${this.ruangan2}`)
    }
  }
  </script>