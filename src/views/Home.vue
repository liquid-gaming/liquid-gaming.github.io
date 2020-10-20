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
                <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" class="home-text">
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
      <v-container class="mt-5 dark black--background component-container" id="About">        
        <v-card :elevation="5" class="home-cards">
          <About :discord="dicord" :teamMembers="teamMembers"/>
        </v-card>
      </v-container>
      <v-parallax height="350" :src="firstCarousel" id="home-image"></v-parallax>
    <v-container class="mt-5 dark black--background component-container">    
      <v-card :elevation="5" class="home-cards">
        <v-row align="center" justify="center">
          <v-container>
            <v-row align="left" justify="left">
              <v-col>
                <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                  Servers
                </div>
                <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" class="home-text">
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
                      <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" class="home-text">
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
                      <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" class="home-text">
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
    <v-parallax height="350" :src="secondCarousel" id="home-image"></v-parallax>
    <v-container class="mt-5 dark black--background" style="margin-bottom:20px;">
      <Recruitment :stepsForRecruitment="stepsForRecruitment"/>
    </v-container>
     <v-parallax height="350" :src="thirdCarousel" id="home-image"></v-parallax>
  </div>
</template>

<script>
// @ is an alias to /src
import Servers from "@/components/Servers.vue";
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
      ],
      secondCarouselItems: [
      ],
      thirdCarouselItems: [
      ],
      selectedHomeImage: null,
      firstCarousel: null,
      secondCarousel: null,
      thirdCarousel: null,
    };
  },
  methods: {
    randomItem (items) {
      return items[Math.floor(Math.random()*items.length)];
    },
    fileNamesGetter(fileNames){   
      let homePageImage = [];
      let homePageImageJson = [];
      fileNames.keys().forEach(key => (homePageImage.push(fileNames(key))));
      homePageImage.forEach(image => {
        const addImage = {
          src: image
        }
        homePageImageJson.push(addImage)
      });
      return homePageImageJson;
    }
  },
  mounted() {
    
  },
  created() {
    let homeImageFolder = require.context('../assets/HomePageImages/', true);
    const homeImageFiles = this.fileNamesGetter(homeImageFolder);
    this.selectedHomeImage = this.randomItem(homeImageFiles).src;
    
    let carousel1ImagesFolder = require.context('../assets/Carousel1Images/', true);
    const carousel1Files = this.fileNamesGetter(carousel1ImagesFolder);
    this.firstCarousel = this.randomItem(carousel1Files).src;
    
    let carousel2ImagesFolder = require.context('../assets/Carousel2Images/', true);
    const carousel2Files = this.fileNamesGetter(carousel2ImagesFolder);
    this.secondCarousel = this.randomItem(carousel2Files).src;

    let carousel3ImagesFolder = require.context('../assets/Carousel3Images/', true);   
    const carousel3Files = this.fileNamesGetter(carousel3ImagesFolder);
    this.thirdCarousel = this.randomItem(carousel3Files).src;
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
  .component-container{
    margin-bottom:20px !important;
  }
  .home-cards{
    background:#222222 !important;
    padding:30px !important;
    border-radius: 10px !important;
  }
  .home-text{
    opacity: 0.75 !important; 
    margin-top:10px !important;
  }
</style>
