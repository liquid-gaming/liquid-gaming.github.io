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
                  Seeding is made to allow players to play fairly while we try to populate the server. 
                  We typically use Al Basrah Skirmish V1 to seed our servers. Once the server is announced as LIVE,
                   these rules will no longer apply until the next seed. Please read the rules for seeding below.<br/><br/><br/>
              </div>
            </v-flex>
            <v-flex xs12 sm5 md6 lg8 just>
              <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-1 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
                    :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" 
                    class="seeding-Center">
                  Rules
              </div>
              <div class="subtitle-1" style="opacity: 0.75; margin:10px 0 40px 0; text-align: center">
                  <b>Noob Friendly & Map Voting</b><br/>
                  • The server will become LIVE after the server reaches 23 v 23 players.<br/>
                  • Fighting is allowed over the center objective or two middle objective, whichever applies.<br/>
                  • DO NOT attack, dig, or IED HABs and/or FOBs.<br/>
                  • Only one FOB and HAB allowed per side.<br/><br/>
                  <b>Modded Server</b><br/>
                  • The server will become LIVE after the server reaches 20 players.<br/>
                  • No building fortifications or emplacements on PVP gamemodes.<br/>
              </div>
            </v-flex>      
          </template>          
        </v-col>
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