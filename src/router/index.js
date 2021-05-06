import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Seeding from '../views/Seeding.vue'
import SquadMasters from '../views/SquadMasters.vue'
import PlayerStats from '../views/PlayerStats.vue'
import Announcements from '../views/Announcements.vue'
import RouterLinks from '../constants/RouterLinks.js'

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
      beforeEnter() {location.href = RouterLinks.DISCORD}
    },
    {
      path: '/merch',
      name: 'LiQMerchandise',
      beforeEnter() {location.href = RouterLinks.MERCH}
    },
    {
      path: '/feedback',
      name: 'LiQModdedFeedback',
      beforeEnter() {location.href = RouterLinks.BUGS_FORM}
    },
    {
      path: '/announcements',
      name: 'Announcements',
      component: Announcements
    },
    { path: '*', component: Home }
  ]
})
