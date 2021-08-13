<template>
    <div class="carouselDiv">
        <v-carousel 
            hide-delimiters 
            cycle
            interval="10000"
            :show-arrows="false"
            height="350px"> 
            <v-carousel-item
                v-for="(item, i) in randomizeArray()"
                :key="i"
                :src="item.src"
                class="carouselItem"
            ></v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    props: {
    carouselItems: {
      type: Array,
      default: function() {
        return{}
      }
    }
  },
  methods:{
    randomizeArray(){
      for (var i = this.carouselItems.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = this.carouselItems[i];
          this.carouselItems[i] = this.carouselItems[j];
          this.carouselItems[j] = temp;
        }
        return this.carouselItems;
    }
  }
}
</script>
<style lang="scss">
.carouselItem{
  opacity: 0.6; 
  background: rgba(100,100,100)
}
.carouselDiv{
  background:rgba(100,100,100);
}
</style>