<template>
  <number
    :from="0"
    :to="number"
    :duration="3"
    :delay=".2"
    easing="Power1.easeOut"
  />
</template>

<script>
export default {
 props: { 
     number: { default: 0 },
     name: {default: "" }
    },
  data: function () {
    return {
    };
  },

  ready: function () {
    this.displayNumber = this.number ? this.number : 0;
  },
}
</script>

<style>
</style>
