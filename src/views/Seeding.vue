<template>
  <div class="home background-image">
    <v-layout fill-height align-center>
      <v-container style="margin-top:75px">
        <v-card style="padding:20px">
          <v-row align="left" justify="left" class="white--text">
            <div :class="{'display-4 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}" >
              Seeding rules
            </div>
            <template align="right" justify="right">
              <v-hover v-slot:default="{ hover }">
                  <v-card :elevation="hover ? 10 : 5" style="border-radius: 20px;">
                    <img src="@/assets/squadseedingmap.png" alt="">
                  </v-card>  
              </v-hover>
            </template>
          </v-row>
        </v-card>
      </v-container>
    </v-layout>
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
  }
</style>