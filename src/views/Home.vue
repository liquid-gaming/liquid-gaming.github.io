<template>
  <div class="home background-image">
    <v-parallax
      height="950"
      src="@/assets/tankInfield.jpg"
      id="home-image"
    >
      <v-layout fill-height align-center>
          <v-container>
            <v-row align="center" justify="center" class="white--text">
              <v-col cols="12">
                <div :class="{'display-4 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                  LiQuid Gaming
                </div>
                <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" style="opacity: 0.75; margin-top:10px;">
                  We are a high-level clan in various gaming platforms with a community of over 800 players. <br/>
                  We currently host 2 servers in Squad and have plan for more in the future. <br/>
                  <br/>
                  We are eager to help new or ruturning players redisocer their passion for gaming. <br/>
                  Please scroll down and take a look, we would love for you to join us! <br/>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-layout>
    </v-parallax>
      <v-container class="mt-5 dark black--background" style="margin-bottom:20px;" id="About">        
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 15 : 5"  style="background:#222222;padding:30px;border-radius: 10px;">
            <About :discord="dicord" :teamMembers="teamMembers"/>
          </v-card>
        </v-hover>
      </v-container>
      <Carousel id="Servers" :carouselItems="firstCarouselItems"/>
    <v-container class="mt-5 dark black--background" style="margin-bottom:20px;">    
      <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 15 : 5"  style="background:#222222;padding:30px;border-radius: 10px;">
          <v-row align="center" justify="center">
            <v-container>
              <v-row align="left" justify="left">
                <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                  Servers
                </div>
                <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" style="opacity: 0.75; margin-top:10px;">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </v-row>
            </v-container>
            <v-layout wrap my-5>
              <v-flex justify-center class="mt-5">
                <v-layout wrap>
                  <v-container>
                    <v-row align="left" justify="left">
                      <div :class="{'display-1 font-weight-bold ': $vuetify.breakpoint.smAndUp}">
                        Squad
                      </div>
                    </v-row>
                  </v-container>
                  <template v-for="(server, i) in squadServersList">
                    <v-flex :key="i" xs12 sm4 md5 lg6 just>
                      <Servers :server="server" />
                    </v-flex>
                  </template>
                </v-layout>
                <v-layout wrap>
                  <v-container>
                    <v-row align="left" justify="left">
                      <div :class="{'display-1 font-weight-bold ': $vuetify.breakpoint.smAndUp}">
                        Minecraft
                      </div>
                    </v-row>
                  </v-container>
                  <template v-for="(server, i) in minecraftServersList">
                    <v-flex :key="i" xs12 sm4 md5 lg6 just>
                      <Servers :server="server" />
                    </v-flex>
                  </template>
                </v-layout>
                <v-layout wrap>
                  <template>
                    <v-flex xs12 sm12 md12 lg12>
                      <Patreon />
                    </v-flex>
                  </template>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-row>
        </v-card>
      </v-hover>
    </v-container>
      <Carousel :carouselItems="secondCarouselItems" id="Recruitment"/>
    <v-container class="mt-5 dark black--background" style="margin-bottom:20px;">
      <Recruitment :stepsForRecruitment="stepsForRecruitment"/>
    </v-container>
      <Carousel :carouselItems="thirdCarouselItems"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Servers from "@/components/Servers.vue";
import Carousel from "@/components/Carousel.vue"
import About from "@/components/About.vue"
import Recruitment from "@/components/Recruitment.vue"
import Patreon from "@/components/Patreon.vue"

//Json files
import squadServersListJson from "@/assets/json/squadServerInfo.json"
import minecraftServersListJson from "@/assets/json/minecraftServerInfo.json"
import discordJson from "@/assets/json/discordInfo.json"
import teamMembersJson from "@/assets/json/teamMembers.json"
import stepsForRecruitmentJson from "@/assets/json/stepsForRecruitment.json"

export default {
  name: "home",
  components: {
    Servers,
    Carousel,
    About,
    Recruitment,
    Patreon
  },
  data() {
    return {
      dicord: discordJson,
      minecraftServersList: minecraftServersListJson,
      squadServersList: squadServersListJson,
      teamMembers: teamMembersJson,
      stepsForRecruitment: stepsForRecruitmentJson,
      firstCarouselItems: [
        {
          src:require('../assets/TANK.jpg')
        },
        {
          src:require('../assets/tandam.png')
        },
        {
          src:require('../assets/people.png')
        },
        {
          src:require('../assets/tankInSide.jpg')
        },
        {
          src:require('../assets/tank on hill.jpg')
        }
      ],
      secondCarouselItems: [
        {
          src:require('../assets/1.png')
        },
        {
          src:require('../assets/2.jpg')
        },
        {
          src:require('../assets/3.jpg')
        },
        {
          src:require('../assets/4.jpg')
        },
        {
          src:require('../assets/5.jpg')
        }
      ],
      thirdCarouselItems: [
        {
          src:require('../assets/6.jpg')
        },
        {
          src:require('../assets/7.jpg')
        },
        {
          src:require('../assets/8.jpg')
        }
      ]
    };
  }
};
</script>

<style lang="css">
  #home-image .v-parallax__content {
    background: linear-gradient(45deg, rgba(100,100,100,.33), rgba(100,100,100,.7));
  }
  .background-image{
    background-image: url('~@/assets/escheresque_ste.png');
    background-repeat: repeat;
  }
</style>