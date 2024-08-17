import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/Home.vue")
    },
    {
      path: '/players',
      name: 'players',
      component: () => import("@/views/players.vue")
    },
    {
      path: '/teams',
      name: 'teams',
      component: () => import("@/views/teams.vue")
    },
    {
      path: '/games',
      name: 'games',
      component: () => import("@/views/games.vue")
    }
  ]
})

export default router
