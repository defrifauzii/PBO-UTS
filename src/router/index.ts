import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MahasiswaView from "../views/MahasiswaView.vue";
import DosenView from "../views/DosenView.vue";
import RuanganView from "../views/RuanganView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/ruangan",
      name: "RuanganView",
      component: () => import("../views/RuanganView.vue"),
    },
    {
      path: "/mahasiswa",
      name: "MahasiswaView",
      component: () => import("../views/MahasiswaView.vue"),
    },
    {
      path: "/dosen",
      name: "DosenView",
      component: () => import("../views/DosenView.vue"),
    },
  ],
});

export default router;
