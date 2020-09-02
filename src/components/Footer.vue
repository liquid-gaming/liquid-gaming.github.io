<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      width="100%"
      class="white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="(media, index) in mediaLinks"
          :key="index"
          class="mx-4 white--text"
          icon
          :href="media.link"
          target="_targetBlank"
        >
          <v-icon size="24px">{{ media.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        If you have any questions or inquiries please contact one of our administration members on our <a :href="discordLink.link" target="_targetBlanks">discord</a>.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <strong>LiQ Gaming</strong>
      </v-card-text>
      <v-card-text class="white--text" style="opacity:0.3;font-size:12px">
        @Copyright 2019-{{ new Date().getFullYear() }}<br>
        <span style="font-style: italic;">
          All rights reserved. Powered by these fists.
        </span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import mediaLinks from "@/assets/json/mediaLinks.json"
export default {
  data: () => ({
      mediaLinks: mediaLinks,
      discordLink: mediaLinks.find(o=>{
        return o.name === "discord";
      })
    }),
};
</script>

<style>
</style>