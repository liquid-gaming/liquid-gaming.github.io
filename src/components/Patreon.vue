<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      target="_blank"
      :elevation="hover ? 10 : 5"
      class="parteonCard"
    >
      <v-row align="left" justify="left">
        <v-flex xs12 sm12 md12 lg6 just>
          <v-card-text>
            <div class="display-1 font-weight-bold">Queue too long?</div>
            <div
              class="subtitle-1 mt-2"
            >Join LiQ and get whitelisted! Or become a patreon and skip the queue!</div>
          </v-card-text>
        </v-flex>        
        <v-layout row wrap align-center>
          <v-col align="center" justify="center">
          <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 10 : 5" width="239px" height="68px">
                <a
                  href="https://www.patreon.com/bePatron?u=38350579"
                  target="_blankTarget">
                  <img src="@/assets/patreon4.png" width="239px" height="68px" />
                </a>
              </v-card>
          </v-hover>
          </v-col>
        </v-layout>
      </v-row>
    </v-card>
  </v-hover>
</template>


<script>
import mediaLinks from "@/assets/json/mediaLinks.json";
export default {
  data: () => ({
    mediaLinks: mediaLinks,
    discordLink: mediaLinks.find((o) => {
      return o.name === "patreon";
    }),
  }),
};
</script>

<style lang="scss" scoped>
.titleColour {
  color: #e6e6e6;
}
.parteonCard{
  border-radius: 20px; 
  margin:20px 5px 0px 5px;
}
</style>