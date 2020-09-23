import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Seeding from '../views/Seeding.vue'
import PlayerStats from '../views/PlayerStats.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/seeding',
      name: 'Seeding',
      component: Seeding
    },
    {
      path: '/playerstats',
      name: 'Player Stats',
      component: PlayerStats
    },
    {
      path: '/discord',
      name: 'Discord',
      beforeEnter() {location.href = 'https://discord.gg/xabsac'}
    },
    { path: '*', component: Home }
  ]
})
