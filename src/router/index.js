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
      /*this link is a copy of the on ein mediaLinks.json will need to find a way to get it from the file 
        but this will work for now*/
      beforeEnter() {location.href = 'https://discord.gg/5WrXn4a'}
    },
    { path: '*', component: Home }
  ]
})
