<template>
  <v-row align="left" justify="left">
    <v-flex just>
      <v-container>
        <v-row align="left" justify="left">
          <v-card
            :elevation="5"
            style="background:#222222;padding:30px;border-radius: 10px;margin:0 10px 0 10px">
            <div 
              :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
              Wanna join LiQ?
              </div>
            <div
              :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}"
              style="opacity: 0.75; margin-top:10px;">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </v-card>
        </v-row>
      </v-container>
    </v-flex>
  </v-row>
</template>

<script>
export default {
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