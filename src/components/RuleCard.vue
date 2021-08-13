<template>
<v-hover v-slot:default="{ hover }">
  <v-card target="_blank" :elevation="hover ? 10 : 5" class="ruleCardWrap">
    <v-card-text>
      <v-row align="left" justify="left">
        <v-col>
          <div class="title mt-2 titleColour">{{server.name}}</div>
          <div :class="{ preWrapped: containBreaks(server.description)}">{{server.description}}</div>
        </v-col>
      </v-row>
    </v-card-text>
    <div v-if="server.mapVoteCommands != null" class="expantionPannelsDivs">
      <v-expansion-panels class="expantionPannels">
        <v-expansion-panel>
          <v-expansion-panel-header class="titleColour">Map Vote Commands</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-flex v-for="(command, index) in server.mapVoteCommands" :key="index">
              <v-card class="card-container rule-cards">
                <v-card-text class="px-4">
                  <v-card-title>
                    <h5 class="titleColour">{{index+1}}: {{command.title}}</h5>
                  </v-card-title>
                  <v-card-subtitle :class="{ preWrapped: containBreaks(command.description)}" v-if="command.description != null && command.link == null">
                    <p>{{command.description}}</p>
                  </v-card-subtitle>
                  <v-card-subtitle :class="{ preWrapped: containBreaks(command.description)}" v-if="command.description != null && command.link != null">
                    <p>{{command.description}} <a target="_blank" :href="command.link">Squad Layers</a></p>
                  </v-card-subtitle>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div v-else class="nothingPannel"></div>
    <div class="expantionPannelsDivs">
      <v-expansion-panels class="expantionPannels" v-if="server.rules != undefined">
        <v-expansion-panel>
          <v-expansion-panel-header class="titleColour">Rules</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-flex v-for="(rule, index) in server.rules" :key="index">
              <v-card class="card-container rule-cards">
                <v-card-text class="px-4" :class="{'larger-display': $vuetify.breakpoint.smAndDown}">
                  <v-card-title>
                    <h5 class="titleColour">{{index+1}}: {{rule.title}}</h5>
                  </v-card-title>
                  <v-card-subtitle v-if="rule.description != null">
                    <p>{{rule.description}}</p>
                  </v-card-subtitle>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-card>
</v-hover>
</template>
<script>
export default {
  props: {
    server: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    containBreaks(descriptions){
      return descriptions.includes('\n');
    }
  }
};
</script>

<style lang="scss" scoped>
.titleColour {
  color: #e6e6e6;
}
.v-card__text, .v-card__title {
  word-break: normal !important;
}
.preWrapped{
  white-space: pre-wrap;
}
.larger-display{
  padding: 5px !important;
}
.rule-cards{
  margin:7px !important;
}
 ::v-deep.v-expansion-panel{
  background:#262626 !important;
}
.ruleCardWrap{
  border-radius: 20px !important; 
  margin:5px;padding:5px !important;
}
.expantionPannels{
  border-radius: 10px;
}
.expantionPannelsDivs{
  margin:3px;
}
.nothingPannel{
  padding:15px;
}
</style>