<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/LiQ.png">
      <Info/>
    </div>    
  </div>
</template>

<script>
import Info from "./components/Info.vue"

export default {
  name: 'App',
  components: {
    Info
  },
  data() {
  },
  mounted() {
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
