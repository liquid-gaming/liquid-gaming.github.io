<template>
    <nav id="navbar">
        <v-app-bar flat fixed color="transparent" dark height="80px">
            <v-layout justify-center>
            <v-container>
                <v-layout>
                    <v-app-bar-nav-icon class="white--text icon_transparent" @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-spacer></v-spacer>
                <v-toolbar-items class="text-right">
                    <v-btn active-class="no-active" v-show="$vuetify.breakpoint.smAndUp" router to="/" text>Home</v-btn>
                    <v-btn active-class="no-active" v-show="$vuetify.breakpoint.smAndUp" router to="/announcements" text>Announcements</v-btn>
                    <v-btn active-class="no-active" v-show="$vuetify.breakpoint.smAndUp" router to="/seeding" text>Seeding</v-btn>
                    <v-btn active-class="no-active" v-show="$vuetify.breakpoint.smAndUp" router to="/playerstats" text>Player Stats</v-btn>
                    <v-btn active-class="no-active" v-show="$vuetify.breakpoint.smAndUp" router to="/merch" text>Merch</v-btn>
                    <v-btn active-class="no-active" v-show="$vuetify.breakpoint.smAndUp" router to="/liqweekly" text><sub style="margin: 0 5px 13px 0;color: aquamarine">NEW</sub>LiQ Weekly</v-btn>
                </v-toolbar-items>
                </v-layout>
            </v-container>
            </v-layout>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" temporary>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <div v-for="link in links" :key="link.title">
            <div v-if="link.route === ''">
              <v-list-item v-if="$route.path == '/'" @click="$vuetify.goTo('#'+link.title, options ), drawer = false" class="sub-navs">
                <v-list-item-icon>
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon>
      
                <v-list-item-content>
                  <v-list-item-title>{{ link.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
            <div v-else>
              <v-list-item router :to="link.route">
                <v-list-item-icon>
                  <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon>
      
                <v-list-item-content>
                  <v-list-item-title>{{ link.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </div>
        </v-list>
      </v-navigation-drawer>
    <v-fab-transition>
      <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            fixed bottom right
            @click="toTop"
            style="background-color: #20cc92 !important"
          >
            <v-icon>expand_less</v-icon>
          </v-btn>
    </v-fab-transition>
    </nav>
</template>

<script>
// import * as easings from "vuetify/es5/services/goto/easing-patterns";
import { mdiTrophyAward } from '@mdi/js';
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: 'Home', icon: 'mdi-home-city', route: '/' },
        { title: 'About', icon: 'mdi-account-group-outline', route: '' },
        { title: 'Servers', icon: 'mdi-dns', route: '' },
        { title: 'Recruitment', icon: 'assignment', route: '' },
        { title: 'Announcements', icon: 'connect_without_contact', route: '/announcements' },
        { title: 'Rules', icon: 'mdi-format-list-bulleted', route: '/rules' },
        { title: 'Seeding', icon: 'trending_up', route: '/seeding' },
        { title: 'Player Stats', icon: 'leaderboard', route: '/playerstats' },
        { title: 'Squad Masters', icon: mdiTrophyAward, route: '/squadMasters' },
        { title: 'Discord', icon: 'mdi-discord', route: '/discord' },
        { title: 'Merchandise', icon: 'shopping_cart', route: '/merch' },
        { title: 'Patreon', icon: 'mdi-patreon', route: '/patreon' }
      ],
      mini: true,
      fab: false,
      currentRoute: window.location.pathname
    }; 
  },
  methods: {
      onScroll (e) {
        let header = document.querySelector(".v-toolbar");
        let icon = document.querySelector(".v-app-bar__nav-icon");
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||   e.target.scrollTop || 0
        if(top > 300){
          header.classList.remove("transparent")
          icon.classList.remove("icon_transparent")
        }
        if(top<300){
          if (!header.classList.contains("transparent")){
            header.classList.add("transparent")
          }
          if(!icon.classList.contains("icon_transparent")){
            icon.classList.add("icon_transparent")
          }
        }
        this.fab = top > 500
        ;
      },
      toTop () {
        this.$vuetify.goTo(0)
      }
  }
};
</script>

<style lang="css">
  .v-app-bar--is-scrolled {
    opacity: .9 !important;
  }
  .v-btn--active.no-active::before {                                                                             
    opacity: 0 !important;
  }
  .sub-navs{
    background-color:#303030; 
    padding-left: 25px !important;
    border-top: solid;
    border-bottom: solid;
    border-width: thin;
    border-color: rgb(43, 43, 43);
  }
  .icon_transparent{
    background-color: #0cf1a43d !important;
  }
</style>