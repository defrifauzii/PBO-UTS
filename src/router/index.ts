import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EntryMhs from '../views/MahasiswaView.vue'
import EntryDosen from '../views/DosenView.vue'
import EntryRuangan from '../views/RuanganView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: HomeView
    },
    {
      path: '/mahasiswa',
      name: 'EntryMhs',
      component: () => import('../views/MahasiswaView.vue')
    },
    {
      path: '/Ruangan',
      name: 'EntryRuangan',
      component: () => import('../views/RuanganView.vue')
    },
    {
      path: '/Dosen',
      name: 'EntryDosen',
      component: () => import('../views/DosenView.vue')
    }
  ]
})

export default router
