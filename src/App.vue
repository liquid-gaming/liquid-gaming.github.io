<template>
  <v-app id="app">
    <NavBar />
    <v-content v-if="!loading" style="background-color: white">
      <router-view />
    </v-content>
    <Footer id="Contact" />
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
    loading: true
  }),
  
  mounted () {
    this.$loading(true)
    setTimeout(() => {
      this.loading = false;
      this.$loading(false)
    }, 2000)
  }
};
</script>
<style>
#app {
    background-color: var(--v-background-base);
}
</style>
