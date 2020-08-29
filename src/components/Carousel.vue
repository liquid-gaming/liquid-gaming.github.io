<template>
    <div>
        <v-carousel 
            hide-delimiters 
            cycle
            interval="5000"
            :show-arrows="false"
            height="350px"> 
            <v-carousel-item
                v-for="(item, i) in carouselItems"
                :key="i"
                :src="item.src"
                style="opacity: 0.7; background: rgba(100,100,100)"
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
        return {};
      }
    }
  },
}
</script>
<style lang="scss">
</style>