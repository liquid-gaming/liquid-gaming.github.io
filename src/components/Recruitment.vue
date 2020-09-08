<template>
  <v-row align="left" justify="left">
    <v-flex just>
      <v-container>
        <v-row align="left" justify="left">
          <v-card
            :elevation="5"
            style="background:#222222;padding:30px;border-radius: 10px;margin:0 10px 0 10px;width:100%">
            <div 
              :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
              Wanna join LiQ?
              </div>
            <div
              :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}"
              style="opacity: 0.75; margin-top:10px;">
              We are always looking for new members. If you are interest in joining please read the steps below on 
              how to become a memeber or contact one of our recruiters in our discord.
            </div>
          </v-card>
        </v-row>
      </v-container>
    </v-flex>
    <v-flex just>
      <v-row align="left" justify="left" style="margin:0 10px 0 10px">
        <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
            v-for="(item, index) in stepsForRecruitment"
            :key="index"
            :color="item.color"
            :icon="item.icon"
            fill-dot>
            <v-card dark>
                <v-card-title>{{item.title}}</v-card-title>
                <v-card-text class="#272727 text--primary preWrapped">{{item.content}}</v-card-text>
            </v-card>
            </v-timeline-item>
        </v-timeline>
      </v-row>
    </v-flex>

    <v-flex just>
      <v-container>
        <v-row align="left" justify="left">
          <v-card
            :elevation="5"
            style="background:#222222;padding:30px;border-radius: 10px;margin:30px 10px 0 10px">
            <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">Want more of challenge?</div>
            <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" style="opacity: 0.75; margin-top:10px;">
              Think you have what it takes to compete in the Squad World Championship? Consider joining our competitive team! Learn more about 
              our competitive team in Squad Competitive channels in our discord and visit our 
              <a target="_blank" href="https://trello.com/b/KfnyVsRh/meetingtraining-times"> Trello page </a>. Wanna learn more about Squad World Championship?
              Click <a target="_blank" href="https://joinsquad.com/2019/02/06/squad-world-championship/">here</a> for more info.
            </div>
          </v-card>
        </v-row>
      </v-container>
    </v-flex>
  </v-row>
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
  props: {
    stepsForRecruitment: {
      type: Array,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card__text,
.v-card__title {
  word-break: normal !important;
}
.preWrapped {
  white-space: pre-wrap;
}
</style>