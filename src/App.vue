<template>
  <div id="app">
    <LoadingScreen :isLoading="isLoading" />
    <div v-if="!isLoading">
      <img alt="Vue logo" src="./assets/LiQ.png">
      <HelloWorld msg="Welcome To The Party"/>
    </div>    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LoadingScreen from "./components/LoadingScreen";

export default {
  name: 'App',
  components: {
    HelloWorld,
    LoadingScreen
  },
  data() {
    return { isLoading: true };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
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
