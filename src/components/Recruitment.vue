<template>
    <v-row align="left" justify="left">
        <v-flex xs12 sm5 md6 lg6 just>
            <v-container>
                <v-row align="left" justify="left">
                    <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                        Wanna join LiQ?!
                    </div>
                    <div :class="{'subtitle-1': $vuetify.breakpoint.smAndDown}" style="opacity: 0.75; margin-top:10px;">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </v-row>
            </v-container>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex xs12 sm5 md6 lg6 just>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item
                v-for="(item, index) in stepsForRecruitment"
                :key="index"
                :color="item.color"
                :icon="item.icon"
                fill-dot>
                <v-card dark>
                    <v-card-title class="title">
                        {{item.title}}
                    </v-card-title>
                    <v-card-text class="#272727 text--primary">
                        {{item.content}}
                    </v-card-text>
                </v-card>
                </v-timeline-item>
            </v-timeline>
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
        }
    }
};
</script>

<style lang="scss" scoped>

.v-card__text, .v-card__title {
  word-break: normal !important;
}
.preWrapped{
  white-space: pre-wrap;
}
</style>