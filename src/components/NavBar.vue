<template>
    <nav id="navbar">
        <v-app-bar flat fixed color="transparent" dark height="80px">
            <v-layout justify-center>
            <v-container>
                <v-layout>
                    <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-spacer></v-spacer>
                <v-toolbar-items class="text-right">
                    <v-btn
                    v-show="$vuetify.breakpoint.smAndUp"
                    @click="$vuetify.goTo('#About',options )"
                    text>Discord</v-btn>
                    <v-btn
                    v-show="$vuetify.breakpoint.smAndUp"
                    @click="$vuetify.goTo('#Servers',options )"
                    text>Servers</v-btn>
                    <v-btn
                    v-show="$vuetify.breakpoint.smAndUp"
                    @click="$vuetify.goTo('#Recruitment',options )"
                    text>Recruitment</v-btn>
                </v-toolbar-items>
                </v-layout>
            </v-container>
            </v-layout>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" temporary>
  
        <v-divider></v-divider>
  
        <v-list dense>
  
          <v-list-item v-for="item in items" :key="item.title" link @click="$vuetify.goTo('#'+item.title, options ), drawer = false">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
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
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'About', icon: 'mdi-account-group-outline' },
        { title: 'Servers', icon: 'mdi-dns' },
        { title: 'Recruitment', icon: 'assignment' },
        { title: 'Contact', icon: 'connect_without_contact' }        
      ],
      mini: true,
      fab: false
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

</style>