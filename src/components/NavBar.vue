<template>
    <nav id="navbar">
        <v-app-bar flat fixed color="transparent" dark height="80px">
            <v-layout justify-center>
            <v-container>
                <v-layout>
                    <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-spacer></v-spacer>
                <v-toolbar-items class="text-right">
                    <v-btn active-class="no-active" v-show="$vuetify.breakpoint.smAndUp" router to="/" text>Home</v-btn>
                    <v-btn active-class="no-active" v-show="$vuetify.breakpoint.smAndUp" router to="/Seeding" text>Seeding</v-btn>
                    <v-btn active-class="no-active" v-show="$vuetify.breakpoint.smAndUp" router to="/PlayerStats" text>Player Stats</v-btn>
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
            dark
            fixed bottom right
            @click="toTop"
          >
            <v-icon>expand_less</v-icon>
          </v-btn>
    </v-fab-transition>
    </nav>
</template>

<script>
// import * as easings from "vuetify/es5/services/goto/easing-patterns";
export default {
  data() {
    return {
      drawer: false,
      links: [
        { title: 'Home', icon: 'mdi-home-city', route: '/' },
        { title: 'About', icon: 'mdi-account-group-outline', route: '' },
        { title: 'Servers', icon: 'mdi-dns', route: '' },
        { title: 'Recruitment', icon: 'assignment', route: '' },
        { title: 'Contact', icon: 'connect_without_contact', route: '' },
        { title: 'Seeding', icon: 'gavel', route: '/Seeding' },
        { title: 'Player Stats', icon: 'insert_chart_outlined', route: '/PlayerStats' }
      ],
      mini: true,
      fab: false,
      currentRoute: window.location.pathname
    }; 
  },
  methods: {
      onScroll (e) {
        let header = document.querySelector(".v-toolbar");
        if (typeof window === 'undefined') return
        const top = window.pageYOffset ||   e.target.scrollTop || 0
        if(top > 300){
          header.classList.remove("transparent")
        }
        if(top<300){
          if (!header.classList.contains("transparent")){
            header.classList.add("transparent")
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
</style>