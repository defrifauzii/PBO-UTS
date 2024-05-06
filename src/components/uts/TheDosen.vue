<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <div class="justify-content-center">
      
      <h1>Entry Data Dosen</h1>
      <!-- Models Database Start -->
      <v-text-field clearable prepend-icon="$vuetify" v-model="dosen.nidn" label="NIDN" variant="outlined"></v-text-field>
      <v-text-field clearable prepend-icon="$vuetify" v-model="dosen.nama" label="Nama" variant="outlined"></v-text-field>

      <v-fab extended prepend-icon="$vuetify" text="SUBMIT" @click="alertDosen"></v-fab>
    
    <!-- Models Database End-->
    <br />
    <br />

    <!-- Menampilkan nilai hanya jika showNilai bernilai true -->
    <p v-if="showNilai">nidn: {{ dosen2.nidn }}</p>
    <p v-if="showNilai">Nama: {{ dosen2.nama }}</p>
  </div>
      </v-col>
    </v-row>
  </v-container>
    
 
</template>

<script lang="ts">
import { Dosen } from "@/model/Dosen.ts";

export default {
  data() {
    return {
      count: 0,
      nilai: "",
      dosen: new Dosen("", "", 0),

      showNilai: false,
      dosen2: {},
    };
  },

  methods: {
    increment() {
      this.count++;
    },
    rubahNilai() {
      this.nilai = " Muhamad Daffa Khoerudin";
      setTimeout(() => {
        this.nilai = "";
      }, 1000);
    },
    alertDosen() {
      if (!this.dosen.nidn) {
        alert("Field NIDN harus diisi!");
      } else if (this.dosen.nama === "") {
        alert("Field Nama harus diisi!");
      } else {
        alert(`${this.dosen.nama} berhasil ditambahkan`);
        this.dosen2 = this.dosen;
        this.showNilai = true;
        setTimeout(() => {
          this.dosen = "";
        }, 1000);
      }
    },
  },

  mounted() {
    console.log(`The initial count is ${this.dosen}`);
    console.log(`The initial count is ${this.dosen2}`);
  },
};
</script>
