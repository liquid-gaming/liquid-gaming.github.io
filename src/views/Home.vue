<template>
  <div class="home">
    <v-img
      gradient="to top right, rgba(100,100,100,.33), rgba(100,100,100,.7)"
      max-height="1000px"
      src="@/assets/TANK.jpg"
    >
    <v-layout fill-height align-center>
        <v-container>
          <v-row align="center" justify="center" class="white--text">
            <v-col cols="12">
              <div
                :class="{'display-4 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
              >LiQ Gaming</div>
              <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" style="opacity: 0.75;">
                We are a high-level clan in various gaming platforms with a community of over 500 players. <br/>
                We currently host 2 servers in Squad and have plan for more in the future. <br/>
                <br/>
                We are eager to help new or ruturning players redisocer their passion for gaming. <br/>
                Please scroll down and take a look, we would love for you to join us! <br/>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </v-img>
    <v-container class="mt-5" id="Servers" >
      <v-row align="center" justify="center">
        <v-layout wrap my-5>
          <v-flex justify-center class="mt-5">
            <v-layout wrap>
              <template v-for="(server, i) in serversList">
                <v-flex :key="i" xs12 sm6 lg5 just>
                  <Servers :server="server" />
                </v-flex>
              </template>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-row>
    </v-container>
        <Carousel :carouselItems="firstCarouselItems"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Servers from "@/components/Servers.vue";
import Carousel from "@/components/Carousel.vue"

export default {
  name: "home",
  components: {
    Servers,
    Carousel
  },
  data() {
    return {
      serversList: [
        {
          name: "『LiQ』Liquid Gaming: Noob Friendly -AAS/RAAS/INV - PTFO",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          rules:[
            {
              title:"RACIAL SLURS Are Strictly FORBIDDEN",
              description:"Any racist terms, propaganda, slang, gestures and/or other sayings deemed by a LiQ admin to be offensive or hindering the experience of any player on a LiQuid Gaming Server. Will result in a ban determined by the LiQ admin."
            },
            {
              title:"All SQUAD LEADERS Must Have A MIC & Squad Leader KIT.",
              description:"Squad leaders must be able to effectively communicate with the team and squad using a microphone. Also the squad leader must at all times have a squad leader kit. Severity of circumstances for punishment will be determined by the LiQ admin of the server at that time."
            },
            {
              title:"If you CREATE a squad you must be the Squad Leader of that squad.",
              description:"When a player clicks to create a squad then they must lead that squad. A warn/kick method is in place for this rule and is up to the discretion of the LiQ admin to determine the severity of the circumstances."
            },
            {
              title:"LOCKED Squads With 4 Or Less Players Must SPECIFY Their Role; LOGI, TANK, MORTAR.",
              description:"Any squad that is locked with less than 4 people must have a specific role specified in the name of that squad. Clans or friends do not count as a specific reason to lock a squad. Handled with a warn/disband/kick method, that is decided on the specific situation by the LiQ admin."
            },
            {
              title:"DO NOT Solo Vehicles That Require A CREWMAN Kit.",
              description:"Any vehicle that requires a driver/gunner where both seats require a crewman kit. Is applicable under this rule. Handled with a warn/kick method to the discretion of the LiQ admin. All admins must remain cognizant of the probability that a crew member jumped out to repair or the vehicle is returning to main. This does not require administrative action."
            },
            {
              title:"DO NOT Exploit GAME BUGS Such As a Wall Breach & Invulnerable FOBs.",
              description:"Any game bug or exploit that is created, manufactured, or accidently found by a player and then used to hamper the opposing team's efforts to win the game. Is applicable to this rule and is met with a kick/ban where the severity of the circumstances are determined by the LiQ admin."
            },
            {
              title:"Players That Are NOT Assigned To a SQUAD Will Be KICKED From The Server.",
              description:"Any player that does not immediately join or create a squad when they join the server is subject to a kick from the server under the presumption that they are either AFK or wishing to play unassigned. Generally resulting in a kick but circumstances will be handled by a LiQ admin."
            },
            {
              title:"DON'T BE AN ASSHAT or TROLL.",
              description:"Under this rule any player found to be intentionally disrupting the flow of gameplay or other player’s experience in the server. Outside of normal gameplay and discussion. Will be met with a warn/kick/ban under the discretion of the LiQ admin."
            },
            {
              title:"DO NOT MINE OR CAMP THE ENEMY MAIN.",
              description:"If a player places a mine, positions their vehicle or person in a location where their intent is to kill or destroy enemy vehicles coming from/to the enemy main. Will be considered camping the enemy main and punished under this rule at the discretion of the LiQ admin in a kick/ban."
            },
            {
              title:"Squads NAMED after a vehicle get PRIORITY for that vehicle.",
              description:"When a squad is created and named with the intention of using a certain vehicle “ex. Helo” said squad will get priority of the named vehicle. If the named squad is not operating in a manner deemed acceptable by the LiQ admin the admin may disband the squad."
            }
          ]                  
        },
        {
          name: "『LiQ』Liquid Gaming: - Map Voting -AAS/RAAS/INV - PTFO",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          rules:[
            {
              title:"RACIAL SLURS Are Strictly FORBIDDEN",
              description:"Any racist terms, propaganda, slang, gestures and/or other sayings deemed by a LiQ admin to be offensive or hindering the experience of any player on a LiQuid Gaming Server. Will result in a ban determined by the LiQ admin."
            },
            {
              title:"All SQUAD LEADERS Must Have A MIC & Squad Leader KIT.",
              description:"Squad leaders must be able to effectively communicate with the team and squad using a microphone. Also the squad leader must at all times have a squad leader kit. Severity of circumstances for punishment will be determined by the LiQ admin of the server at that time."
            },
            {
              title:"If you CREATE a squad you must be the Squad Leader of that squad.",
              description:"When a player clicks to create a squad then they must lead that squad. A warn/kick method is in place for this rule and is up to the discretion of the LiQ admin to determine the severity of the circumstances."
            },
            {
              title:"LOCKED Squads With 4 Or Less Players Must SPECIFY Their Role; LOGI, TANK, MORTAR.",
              description:"Any squad that is locked with less than 4 people must have a specific role specified in the name of that squad. Clans or friends do not count as a specific reason to lock a squad. Handled with a warn/disband/kick method, that is decided on the specific situation by the LiQ admin."
            },
            {
              title:"DO NOT Solo Vehicles That Require A CREWMAN Kit.",
              description:"Any vehicle that requires a driver/gunner where both seats require a crewman kit. Is applicable under this rule. Handled with a warn/kick method to the discretion of the LiQ admin. All admins must remain cognizant of the probability that a crew member jumped out to repair or the vehicle is returning to main. This does not require administrative action."
            },
            {
              title:"DO NOT Exploit GAME BUGS Such As a Wall Breach & Invulnerable FOBs.",
              description:"Any game bug or exploit that is created, manufactured, or accidently found by a player and then used to hamper the opposing team's efforts to win the game. Is applicable to this rule and is met with a kick/ban where the severity of the circumstances are determined by the LiQ admin."
            },
            {
              title:"Players That Are NOT Assigned To a SQUAD Will Be KICKED From The Server.",
              description:"Any player that does not immediately join or create a squad when they join the server is subject to a kick from the server under the presumption that they are either AFK or wishing to play unassigned. Generally resulting in a kick but circumstances will be handled by a LiQ admin."
            },
            {
              title:"DON'T BE AN ASSHAT or TROLL.",
              description:"Under this rule any player found to be intentionally disrupting the flow of gameplay or other player’s experience in the server. Outside of normal gameplay and discussion. Will be met with a warn/kick/ban under the discretion of the LiQ admin."
            },
            {
              title:"DO NOT MINE OR CAMP THE ENEMY MAIN.",
              description:"If a player places a mine, positions their vehicle or person in a location where their intent is to kill or destroy enemy vehicles coming from/to the enemy main. Will be considered camping the enemy main and punished under this rule at the discretion of the LiQ admin in a kick/ban."
            },
            {
              title:"Squads NAMED after a vehicle get PRIORITY for that vehicle.",
              description:"When a squad is created and named with the intention of using a certain vehicle “ex. Helo” said squad will get priority of the named vehicle. If the named squad is not operating in a manner deemed acceptable by the LiQ admin the admin may disband the squad."
            }
          ]                  
        }
      ],
      firstCarouselItems: [
        {
          src:require('../assets/TANK.jpg')
        },
        {
          src:require('../assets/tandam.png')
        }
      ]
    };
  }
};
</script>