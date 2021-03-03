import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Seeding from '../views/Seeding.vue'
import SquadMasters from '../views/SquadMasters.vue'
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
      path: '/squadMasters',
      name: 'SquadMasters',
      component: SquadMasters
    },
    {
      path: '/playerstats',
      name: 'Player Stats',
      component: PlayerStats
    },
    {
      path: '/discord',
      name: 'Discord',
      /*this link is a copy of the on in mediaLinks.json will need to find a way to get it from the file 
        but this will work for now*/
      beforeEnter() {location.href = 'https://discord.gg/5WrXn4a'}
    },
    {
      path: '/merch',
      name: 'LiQMerchandise',
      /*this link is a copy of the on in mediaLinks.json will need to find a way to get it from the file 
        but this will work for now*/
      beforeEnter() {location.href = 'https://shop.spreadshirt.com/liq-gaming/'}
    },
    { path: '*', component: Home }
  ]
})
