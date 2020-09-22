import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Seeding from '../views/Seeding.vue'
import PlayerStats from '../views/PlayerStats.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Seeding',
      name: 'Seeding',
      component: Seeding
    },
    {
      path: '/PlayerStats',
      name: 'Player Stats',
      component: PlayerStats
    },
    { path: '*', component: Home }
  ]
})
