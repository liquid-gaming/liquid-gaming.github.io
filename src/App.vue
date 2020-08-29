<template>
  <v-app>
    <ToolBar />
    <v-content style="background-color: white">
      <!-- <HelloWorld /> -->
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import ToolBar from "./components/Toolbar";
import Footer from "./components/Footer";

export default {
  name: 'App',

  components: {
    ToolBar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
