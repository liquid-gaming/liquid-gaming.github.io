<template>
    <nav>
        <v-app-bar flat fixed color="transparent" dark height="120px">
            <v-layout justify-center>
            <v-container>
                <v-layout>
                    <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-spacer></v-spacer>
                <v-toolbar-items class="text-right">
                    <v-btn
                    :x-small="$vuetify.breakpoint.smAndDown"
                    @click="$vuetify.goTo('#about',options )"
                    text>About</v-btn>
                    <v-btn
                    :x-small="$vuetify.breakpoint.smAndDown"
                    @click="$vuetify.goTo('#contact',options )"
                    text>Contact</v-btn>
                </v-toolbar-items>
                </v-layout>
            </v-container>
            </v-layout>
        </v-app-bar>
        <v-navigation-drawer app v-model="drawer" temporary>
  
        <v-divider></v-divider>
  
        <v-list dense>
  
          <v-list-item v-for="item in items" :key="item.title" link >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
  
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
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
        { title: 'About', icon: 'mdi-account' },
        { title: 'Contact', icon: 'mdi-account-group-outline' },
      ],
      mini: true,
    };
  }
};
</script>

<style>
</style>