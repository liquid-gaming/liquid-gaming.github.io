<template>
    <v-hover v-slot:default="{ hover }">
        <v-card target="_blank" :elevation="hover ? 10 : 5" style="border-radius: 20px; margin:20px 5px 0px 5px;">
            <v-card-text>
                <div class="display-1 font-weight-bold">
                    Queue to long?
                </div>
                <div class="subtitle-1 mt-2">Join LiQ and get whitelisted! Or become a patreon and skip the queue!</div>
                <div>
                  <!-- patreon link -->
                </div>
            </v-card-text>
        </v-card>
    </v-hover>
</template>

<script>
import mediaLinks from "@/assets/json/mediaLinks.json"
export default {
    data: () => ({
      mediaLinks: mediaLinks,
      discordLink: mediaLinks.find(o=>{
        return o.name === "patreon";
      })
    }),
};
</script>

<style lang="scss" scoped>
.titleColour {
  color: #e6e6e6;
}
</style>