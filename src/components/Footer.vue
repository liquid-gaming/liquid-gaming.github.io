<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      class="white--text text-center">
        <v-card-text>
          <v-flex just>
            <v-row align="center" justify="center">
              <v-btn
                v-for="(media, index) in mediaLinksFiltered"
                :key="index"
                class="mx-4 white--text"
                icon
                :href="media.link"
                target="_targetBlank">
                <v-icon size="24px">{{ media.icon }}</v-icon>
              </v-btn>
              <div>
                <a target="_blank" :href="squadLink.link" width="75px !important"><img src="@/assets/squad_white.png" class="justify-center squadLink" width="75px"></a>
              </div>              
              <div>
                <a target="_blank" :href="minecraftLink.link" width="75px !important"><img src="@/assets/minecraft_logo.jpg" class="justify-center minecraftLink" width="45px"></a>
              </div>              
            </v-row>
          </v-flex>
        </v-card-text>
      <v-card-text class="white--text pt-0">
        If you have any questions or inquiries please contact one of our administration members on our <a class="link" :href="discordLink.link" target="_targetBlanks">discord</a>.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text footerName">
        <strong>LiQ Gaming</strong>
      </v-card-text>
      <v-card-text class="rights white--text">
        @Copyright 2019-{{ new Date().getFullYear() }}<br>
        <span class="italicFooter">
          All rights reserved. Powered by these fists. Like the website? Contact our Technical Support on our discord for more info.
        </span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import mediaLinks from "@/assets/json/mediaLinks.json"
export default {
  data() {
    return{
      mediaLinks: mediaLinks,
      discordLink: mediaLinks.find(o=>{
        return o.name === "discord";
      }),
      squadLink: mediaLinks.find(o=>{
        return o.name === "squad";
      }),
      minecraftLink: mediaLinks.find(o=>{
        return o.name === "minecraft";
      })
    }
  },
  computed:{
    mediaLinksFiltered(){ 
      return this.mediaLinks.filter(o=> o.name === "discord" || o.name === "patreon")}
  }
}
</script>

<style>
  .link{
    color:#FFFFFF !important
  }

  .squadLink{
    margin:3px 10px 0 10px !important;
  }
  .minecraftLink{
    margin:5px 10px 0 10px !important;
  }
  .footerName{
    padding-bottom:0 !important;
  }
  .rights{
    opacity:0.3 !important;
    font-size:12px !important;
  }
  .italicFooter{
    font-style: italic;
  }
</style>