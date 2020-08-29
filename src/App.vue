<template>
  <v-app>
    <NavBar />
    <v-content style="background-color: white">
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  name: 'App',

  components: {
    NavBar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.v-application {
    background-color: var(--v-background-base) !important;
}
</style>
