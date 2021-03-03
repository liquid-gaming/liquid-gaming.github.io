<template>
  <div class="home background-image">
    <v-container >
      <v-card class="seeding-card">
        <v-col align="Left" justify="Left">
        <v-row>
          <template>
            <v-flex xs12 sm5 md6 lg6 xl7 just>
                <v-col>
                    <div :class="{'display-4 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
                        :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" 
                        style="text-align: Left">
                        Squad Masters!
                    </div>
                    <div class="subtitle-1" style="opacity: 0.75; margin:10px 0 40px 0; text-align: left; font-size:19px !important">
                        We are excited to announce that this year we will be apart of the very first Squad Masters Tournament!
                        This is a huge honor and we are very thankful for everyone over at Squad Masters. Our competitive team, along with Shift W, 
                        will be challenging 16 other Squad competitive communities! Things will start up mid march and last 7-8 weeks of pure 
                        thrilling action!
                    </div>
                    <v-col>
                        <v-btn class="ma-2" :loading="loading" :disabled="loading" color="blue" @click="loader = 'loading'" href="https://squadmasters.com/" target="_blank">
                            Click here to check out Squad Masters Website!
                        </v-btn>
                        <v-btn class="ma-2" :loading="loading2" :disabled="loading2" color="blue" @click="loader = 'loading2'" href="https://www.toornament.com/en_GB/tournaments/4376251278723604480/information" target="_blank">
                            Click here to find out more about the Tournament!
                        </v-btn>
                    </v-col>
                </v-col>
            </v-flex>  
            <v-flex xs12 sm7 md6 lg6 xl5 just>
                <v-hover v-slot:default="{ hover }">
                    <v-card :elevation="hover ? 10 : 5" class="seeding-map">
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
// @ is an alias to /src
//Json files

export default {
  name: "SquadMasters",
  data () {
      return {
        loader: null,
        loading: false,
        loading2: false
      }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
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
</style>