<template>
  <div class="home background-image">
    <v-container >
      <v-card class="seeding-card">
        <v-col align="center" justify="center">
          <template>
            <v-flex xs12 sm5 md6 lg8 just>
              <div :class="{'display-4 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
                  :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" 
                  class="seeding-Center">
                Seeding
              </div>
              <div class="subtitle-1" style="opacity: 0.75; margin:10px 0 40px 0; text-align: center">
                  Seeding is made to allow players to play fairly while we try to populate the server. We typically use Al Basrah Skirmish V1 to seed our servers. 
                  Please read the rules for seeding below and look at the image provided to see how we set up the map for seeding. The image also shows the locations 
                  of the FOBs and designated zone to fight over without crossing the colored lines of your associated team.
                  If any backup FOBs are needed, the radio and the HAB are to be placed BEHIND the primary HAB locations automatically set on the map.
              </div>
            </v-flex>      
          </template>          
        </v-col>
        <v-row>
          <template>
            <v-flex xs12 sm7 md6 lg4 xl4 just>
              <div :class="{'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-1 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
                    :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" 
                    class="seeding-Center">
                  Al Basrah
              </div>
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 10 : 5" class="seeding-map">
                  <img class="image-fit" src="@/assets/seeding1.png" alt="">
                </v-card>  
              </v-hover>
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 10 : 5" class="seeding-map">
                  <img class="image-fit" src="@/assets/seeding2.png" alt="">
                </v-card>  
              </v-hover>
              <div :class="{'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-1 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
                    :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" 
                    class="seeding-Center">
                  Sumari
              </div>
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 10 : 5" class="seeding-map">
                  <img class="image-fit" src="@/assets/sumari_seeding_1.png" alt="">
                </v-card>  
              </v-hover>
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 10 : 5" class="seeding-map">
                  <img class="image-fit" src="@/assets/sumari_seeding_2.png" alt="">
                </v-card>  
              </v-hover>
            </v-flex>
            <v-flex xs12 sm7 md6 lg4 xl4 just>
              <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-1 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
                    :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" 
                    class="seeding-Center">
                  Rules
              </div>
              <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" style="opacity: 0.75; margin-top:10px; text-align: center">
                  • Admins will call the server LIVE after the server reaches 20 v 20 players.<br/>
                  • Fighting is allowed over the center objective or two middle objective, whichever applies.<br/>
                  • DO NOT attack, dig, or IED HABs and/or FOBs.<br/>
                  • No armed vehicles or emplacements are to be used (MG, mortar, etc).<br/>
                  • Only one FOB and HAB allowed per side.<br/>
                  • FOBs placed on the main capture point are subject to attack.
              </div>
              <div :class="{'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-1 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
                    :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" 
                    style="text-align: center; margin-top:15px">
                  How To Read Map
              </div>
              <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" style="opacity: 0.75; margin-top:10px; text-align: center">
                  Based on what side of the map your main is:<br/>
                  • Red castle is where to place raido.<br/>
                  • Red lines are where you cannot cross.<br/>
              </div>
            </v-flex>
            <v-flex xs12 sm7 md6 lg4 xl4 just>
              <div :class="{'display-2 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-1 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
                    :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" 
                    class="seeding-Center">
                  Mutaha
              </div>
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 10 : 5" class="seeding-map">
                  <img class="image-fit" src="@/assets/mutaha_seeding_1.png" alt="">
                </v-card>  
              </v-hover>
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 10 : 5" class="seeding-map">
                  <img class="image-fit" src="@/assets/mutaha_seeding_2.png" alt="">
                </v-card>  
              </v-hover>
            </v-flex>
          </template>
        </v-row>
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
  .seeding-card{
    border-radius: 20px !important;
    margin-top: 75px !important;
    padding:35px !important; 
    background-color:rgb(34, 34, 34) !important;
  }
  .seeding-map{
    border-radius: 20px !important;
    padding:10px 10px 5px 10px !important;
  }
  .seeding-Center{
    text-align: center;
  }
</style>