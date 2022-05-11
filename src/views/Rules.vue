<template>
  <div class="home background-image">
    <v-container>
      <div class="announcements-card">
        <v-row align="left" justify="left">
          <v-flex just>
            <v-container>
              <v-row align="left" justify="left">
                <v-card :elevation="5" class="recruitment-card">
                    <div 
                    :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                    LiQuid Gaming Squad Server Rules
                    </div>
                </v-card>
              </v-row>
            </v-container>
          </v-flex>
          <v-flex just>
            <template v-for="(server, i) in squadServersList">
                <v-flex :key="i" class="rulesMargin">
                <RuleCard :server="server"/>
                </v-flex>
            </template>
          </v-flex>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import RuleCard from "@/components/RuleCard.vue";
//Json files 
import squadServersListJson from "@/assets/json/squadServerInfo.json"

export default {
  name: "Rules",
  components: {
    RuleCard
  },
  data () {
    return {
      squadServersList: squadServersListJson,
    }
  },
  methods:{
    containBreaks(descriptions){
      return descriptions.includes('\n');
    }
  }
};
</script>

<style lang="css">
  .background-image{
    background-image: url('~@/assets/escheresque_ste.png');
    background-repeat: repeat;
    height: 100% !important;
  }
  .announcements-card{
    border-radius: 20px !important;
    margin-top: 45px !important;
    padding:35px !important; 
  }
  .v-card__text,
.v-card__title {
  word-break: normal !important;
}
.recruitment-card{
  background:#222222 !important;
  padding:30px !important;
  border-radius: 10px !important;
  margin:0 10px 0 10px !important;
  width:100% !important;
}
.rulesMargin{
  margin-top:10px;
}
</style>