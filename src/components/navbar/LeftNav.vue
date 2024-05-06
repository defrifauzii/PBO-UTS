<template>
  <v-navigation-drawer color="dark" theme="dark" permanent expand-on-hover rail>
    
    <v-list density="compact"  nav>
      <v-list-item prepend-icon="$vuetify" title="Home" :to="HomeView"></v-list-item>
      <v-list-item prepend-icon="$vuetify" title="Dosen" :to="DosenView"></v-list-item>
      <v-list-item prepend-icon="$vuetify" title="Mahasiswa" :to="MahasiswaView"></v-list-item>
      <v-list-item prepend-icon="$vuetify" title="Ruangan" :to="RuanganView"></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-main style="height: 450px"></v-main>
</template>

<script>
export default {
  data() {
    return {
      HomeView: "/",
      RuanganView: "/ruangan",
      MahasiswaView: "/mahasiswa",
      DosenView: "/dosen",
    };
  },
};
</script>
