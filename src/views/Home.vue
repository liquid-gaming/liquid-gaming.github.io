<template>
  <div class="home background-image" id="Home">
    <v-parallax
      height="950"
      :src="selectedHomeImage"
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
                  We are a high-level clan in various gaming platforms with a community of over 900 players. <br/>
                  We currently host two servers in Squad and have plan for more in the future. <br/>
                  <br/>
                  We are eager to help new or returning players rediscover their passion for gaming. <br/>
                  Please scroll down and take a look, we would love for you to join us! <br/>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-layout>
    </v-parallax>
      <v-container class="mt-5 dark black--background" style="margin-bottom:20px;" id="About">        
        <v-card :elevation="5"  style="background:#222222;padding:30px;border-radius: 10px;">
          <About :discord="dicord" :teamMembers="teamMembers"/>
        </v-card>
      </v-container>
      <Carousel id="Servers" :carouselItems="firstCarouselItems"/>
    <v-container class="mt-5 dark black--background" style="margin-bottom:20px;">    
      <v-card :elevation="5"  style="background:#222222;padding:30px;border-radius: 10px;">
        <v-row align="center" justify="center">
          <v-container>
            <v-row align="left" justify="left">
              <v-col>
                <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                  Servers
                </div>
                <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" style="opacity: 0.75; margin-top:10px;">
                  LiQuid Gaming currently hosts 3 servers for our community, Two Squad Servers and one Minecraft server. More will be coming through out the year.
                </div>
              </v-col>
            </v-row>
          </v-container>
          <v-layout wrap my-5>
            <v-flex justify-center class="mt-5">
              <v-layout wrap>
                <v-container>
                  <v-row align="left" justify="left">
                    <v-col>
                      <div class="display-1 font-weight-bold ">
                        Squad
                      </div>
                      <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" style="opacity: 0.75; margin-top:10px;">
                        "Squad is a tactical FPS that provides authentic combat experiences through teamwork, communication, and gameplay. It seeks to bridge 
                        the large gap between arcade shooter and military simulation. Large scale, combined arms combat, base building, and a great integrated VoIP system."
                        - Offworld Industries. To learn more about Squad click <a target="_blank" :href="squadLink.link">here</a>, to see their roadmap click 
                        <a target="_blank" :href="squadTrelloLink.link">here</a>.
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
                <template v-for="(server, i) in squadServersList">
                  <v-flex :key="i" xs12 sm6 md6 lg6 just style="margin-top:10px">
                    <Servers :server="server"/>
                  </v-flex>
                </template>
              </v-layout>
              <v-layout wrap>
                <v-container style="margin-top:15px;">
                  <v-row align="left" justify="left">
                    <v-col>
                      <div class="display-1 font-weight-bold ">
                        Minecraft
                      </div>
                      <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" style="opacity: 0.75; margin-top:10px;">
                        To learn more about Minecraft and what it is, click <a target="_blank" :href="minecraftLink.link">here</a>.
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
                <template v-for="(server, i) in minecraftServersList">
                  <v-flex :key="i" xs12 sm4 md5 lg6 just>
                    <Servers :server="server" />
                  </v-flex>
                </template>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-row>
      </v-card>
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
//Json files
import squadServersListJson from "@/assets/json/squadServerInfo.json"
import minecraftServersListJson from "@/assets/json/minecraftServerInfo.json"
import discordJson from "@/assets/json/discordInfo.json"
import teamMembersJson from "@/assets/json/teamMembers.json"
import stepsForRecruitmentJson from "@/assets/json/stepsForRecruitment.json"
import mediaLinks from "@/assets/json/mediaLinks.json"

export default {
  name: "home",
  components: {
    Servers,
    Carousel,
    About,
    Recruitment
  },
  data() {
    return {
      mediaLinks: mediaLinks,
      minecraftLink: mediaLinks.find(o=>{
        return o.name === "minecraft";
      }),
      squadLink: mediaLinks.find(o=>{
        return o.name === "squad";
      }),
      squadTrelloLink: mediaLinks.find(o=>{
        return o.name === "squadTrello";
      }),
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
      ],
      homePageImage: [
        {
          src:require('../assets/tankonroad.png')
        },
        {
          src:require('../assets/tankInfield.jpg')
        },
        {
          src:require('../assets/10.png')
        },
        {
          src:require('../assets/11.png')
        },
        {
          src:require('../assets/12.png')
        },
        {
          src:require('../assets/13.png')
        },
      ],
      selectedHomeImage: null
    };
  },
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    }
  },
  created() {
    this.selectedHomeImage = this.randomItem(this.homePageImage).src;
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
