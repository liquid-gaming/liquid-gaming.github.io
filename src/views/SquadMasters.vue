<template>
  <div class="home background-image">
    <v-container >
      <v-card class="sm-card">
        <v-col align="Left" justify="Left">
          <div :class="{'display-4 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
            :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" 
            class="mastersAlign">
              Squad Masters!
          </div>
          <v-row>
            <template>
              <v-flex xs12 sm12 md12 lg8 xl7 just>
                <v-col>
                  <div class="subtitle-1 mastersText">
                    We are excited to announce that this year we will be apart of the very first Squad Masters Tournament!
                    This is a huge honor and we are very thankful for everyone over at Squad Masters. Our competitive team, along with Shift W, 
                    will be challenging 16 other Squad competitive communities! Things will start up mid march and last 7-8 weeks of pure 
                    thrilling action!
                  </div>
                  <v-col class="sm-col">
                    <div class="video-container">
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/HtNcanDDx6c?autoplay=1"
                        frameborder="0" 
                        allowfullscreen
                      />
                    </div>
                    <v-btn 
                      class="sm-button" 
                      :loading="loading" 
                      :disabled="loading" 
                      color="blue" 
                      @click="loader = 'loading'" 
                      href="https://squadmasters.com/" 
                      target="_blank"
                    >
                      Check out Squad Masters Website!
                    </v-btn>
                    <v-btn 
                      class="sm-button" 
                      :loading="loading2" 
                      :disabled="loading2" 
                      color="blue"
                      @click="loader = 'loading2'" 
                      href="https://www.toornament.com/en_GB/tournaments/4376251278723604480/information" 
                      target="_blank"
                    >
                      Find out more about the Tournament!
                    </v-btn>
                  </v-col>
                </v-col>
              </v-flex>  
              <v-flex xs12 sm12 md12 lg4 xl5 just>
                  <v-hover v-slot:default="{ hover }">
                      <v-card :elevation="hover ? 10 : 5" class="sm-logo">
                      <img class="image-fit" src="@/assets/SM_LOGO_LARGE.png" alt="">
                      </v-card>  
                  </v-hover>
              </v-flex>    
            </template>     
          </v-row>     
        </v-col>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "SquadMasters",
  data() {
    return {
      loading: false,
      loading2: false,
    }
  },
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
  .sm-col {
    padding: 0;
  }
  .sm-button {
    margin: 35px 5px 5px 0px
  }
  .sm-card{
    border-radius: 20px !important;
    margin-top: 75px !important;
    padding:35px !important; 
    background-color:rgb(34, 34, 34) !important;
  }
  .sm-logo{
    border-radius: 20px !important;
    padding:10px 10px 5px 10px !important;
  }.video-container {
    position: relative;
    padding-bottom: 56.25%;
  }
  iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .mastersAlign{
    text-align: Left;
  }
  .mastersText{
    opacity: 0.75; margin:10px 0 40px 0; text-align: left; font-size:19px !important;
  }
@media screen and (max-width: 750px) {
  .video-container {
    padding-bottom: 75%
  }
}
</style>