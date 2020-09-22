<template>
  <div class="home background-image">
    <v-container >
      <v-card style="border-radius: 20px;margin-top: 75px;padding:35px !important; background-color:rgb(34, 34, 34)">
        
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//Json files

export default {
  name: "seeding"
  
};
</script>

<style lang="css">
  .background-image{
    background-image: url('~@/assets/escheresque_ste.png');
    background-repeat: repeat;
    height: 100% !important;
  }
  .image-fit{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>