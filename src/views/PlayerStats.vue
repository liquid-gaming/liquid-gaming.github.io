<template>
  <div class="home background-image">
    <v-container >
      <v-card class="playerstats-card">
        <v-row align="left" justify="left">
          <v-col>
            <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
                 :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" >
              Squad Player Stats
            </div>
            <div class="subtitle-1" style="opacity: 0.75; margin:10px 0 40px 0">
                LiQ gaming player stats are updated on a weekly basis, showing your stats for the past month. 
                Use the search bar to search your in game user name and click the top of a column that you want to sort.
            </div>
            <v-container class="my-2">
                <v-layout row wrap class="justify-center">
                  <v-flex xs12 sm6 md4 lg3 xl2  v-for="(total, index) in totals" :key="index">
                      <v-hover v-slot:default="{ hover }">
                          <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;">
                              <v-card-text>
                                  <h2><AnimatedNumber :number="total"/></h2>
                                  <div class="subheading">Total {{index}}</div>
                              </v-card-text>
                          </v-card>
                      </v-hover>
                  </v-flex>
                </v-layout>
            </v-container>            
            <v-card>
              <v-card-title>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card-title>
              <v-data-table
                v-model="selected"
                :headers="headers"
                :items="itemsWithIndex"
                :search="search"
                item-key="name"
                sort-by="Kills"
                sort-desc
                :footer-props="{
                  showFirstLastPage: true,
                  firstIcon: 'mdi-arrow-collapse-left',
                  lastIcon: 'mdi-arrow-collapse-right',
                  'items-per-page-options': [10, 25, 50, 100]
                }">
                <template v-slot:body="{ items }">
                  <tbody>
                    <tr
                      v-for="item in items"
                      :key="item.id"
                      :search="search"
                      @click="selectItem(item)"
                      class="clicker"
                      >
                        <td> {{ item.index }}</td>
                        <td> {{ item.Name }}</td>
                        <td> {{ item.Kills }}</td>
                        <td> {{ item.Deaths }}</td>
                        <td> {{ item.KD }}</td>
                        <td> {{ item.Wounds }}</td>
                        <td> {{ item.Revives }}</td>                      
                      </tr>
                  </tbody>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <modal name="stat-modal" draggable=".stat-card-text" :resizable="true" :min-width="350" :min-height="450" :max-width="800" :max-height="740" width="30%" height="65%">
      <v-card style="background-color:#171717;padding:1px !important;text-align:center;" class="dragger">
        <div class="stat-card-text">DRAG ME HERE</div>
      </v-card>
      <div class="DivWithScroll">
        <v-layout row wrap class="justify-center">
          <v-flex>
            <div class="text-xl-center ma-1" style="text-align: center;">
              <div class="font-weight-bold" style="color: rgba(255, 255, 255, 0.7);font-size:30px" >
                {{selectedItem.Name}}
              </div>
            </div>
          </v-flex>
        </v-layout>
        <div width="70%" height="70%">
          <bar-chart :player="selectedItem" :average="averageStats"></bar-chart>
        </div>
        <v-container class="my-2">
            <v-layout row wrap class="justify-center">
              <v-flex>
                <v-hover v-slot:default="{ hover }">
                  <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;">
                    <v-card-text>
                      <h3>Your KD: {{selectedItem.KD}}</h3>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-flex>
              <v-flex>
                <v-hover v-slot:default="{ hover }">
                  <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;">
                    <v-card-text>
                      <h3>Average KD: {{averageStats.KD}}</h3>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
        </v-container> 
      </div>
    </modal>
    <modal name="stat-modal-mobile" draggable=".stat-card-text" width="70%" height="80%">
      <v-card style="background-color:#171717;padding:1px !important;text-align:center;" class="dragger">
        <div class="stat-card-text">DRAG ME HERE</div>
      </v-card>
      <div class="DivWithScroll">
        <v-layout row wrap class="justify-center">
          <v-flex>
            <div class="text-xl-center ma-1" style="text-align: center;">
              <div class="font-weight-bold" style="color: rgba(255, 255, 255, 0.7);font-size:30px" >
                {{selectedItem.Name}}
              </div>
            </div>
          </v-flex>
        </v-layout>
        <div width="70%" height="70%">
          <bar-chart :player="selectedItem" :average="averageStats"></bar-chart>
        </div>
        <v-container class="my-2">
            <v-layout row wrap class="justify-center">
              <v-flex>
                <v-hover v-slot:default="{ hover }">
                  <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;">
                    <v-card-text>
                      <h3>Your KD: {{selectedItem.KD}}</h3>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-flex>
              <v-flex>
                <v-hover v-slot:default="{ hover }">
                  <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;">
                    <v-card-text>
                      <h3>Average KD: {{averageStats.KD}}</h3>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
        </v-container> 
      </div>
    </modal>
  </div>
</template>

<script>
// @ is an alias to /src
import AnimatedNumber from "@/components/AnimatedNumber.vue"
import BarChart from '@/components/BarChart'
//Json files
import topStats from "@/assets/json/top-stats.json"
import totalStats from "@/assets/json/total-stats.json"

export default {
  name: "seeding",
  components: {
    AnimatedNumber,
    BarChart
  },
  data () {
      return {
        search: '',
        urlSearchParam: '',
        pagination: {},
        totals: totalStats,
        // totalKills: totalStats.kills,
        // totalDeaths: totalStats.deaths,
        // totalWounds: totalStats.wounds,
        // totalRevives: totalStats.revives,
        headers: [
          {
            text: 'Rank',
            value: 'index',
            align: 'start',
            filterable: false,
          },
          {
            text: 'User Name',
            value: 'Name',
          },
          { text: 'Kills', value: 'Kills' },
          { text: 'Deaths', value: 'Deaths' },
          { text: 'K/D', value: 'KD' },
          { text: 'Wounds', value: 'Wounds' },
          { text: 'Revives', value: 'Revives' },
        ],
        players: topStats.sort((a, b) => parseFloat(b.Kills) - parseFloat(a.Kills)),
        selectedItem: false,
        averageStats: {}
      }
  },
  computed: {
    itemsWithIndex() {
      return this.players.map(
        (players, index) => ({
          ...players,
          index: index + 1
        }))
    }
  },
  methods: {
     selectItem (item) {
      this.selectedItem = item
      if(this.$isMobile()){
        this.$modal.show(
          'stat-modal-mobile',
          { draggable: true }
        );
      }else{
        this.$modal.show(
          'stat-modal',
          { draggable: true }
        );
      }      
    },
    unSelectItem () {
      this.selectedItem = false
    },
  },
  mounted(){
    let playersFiltered = [];
    for (let i = 0; i < this.players.length; i++) {
        if (this.players[i].Kills > 10) {
          playersFiltered.push(this.players[i]);
        }      
    }
    this.averageStats.Kills = Math.round((this.totals.kills / (playersFiltered.length / 2) + Number.EPSILON) * 10) / 10;
    this.averageStats.Deaths = Math.round((this.totals.deaths / (playersFiltered.length / 2) + Number.EPSILON) * 10) / 10;
    this.averageStats.Wounds = Math.round((this.totals.wounds / (playersFiltered.length / 2) + Number.EPSILON) * 10) / 10;
    this.averageStats.Revives = Math.round((this.totals.revives / (playersFiltered.length / 2) + Number.EPSILON) * 10) / 10;
    this.averageStats.KD = Math.round((this.averageStats.Kills / this.averageStats.Deaths + Number.EPSILON) * 1000) / 1000;
    this.urlSearchParam = this.$route.query.username;
    if(this.urlSearchParam != null || this.urlSearchParam != ''){
      this.search = this.urlSearchParam
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
  .image-fit{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .playerstats-card{
    border-radius: 20px !important;
    margin-top: 75px !important;
    padding:35px !important; 
    background-color:rgb(34, 34, 34) !important;
  }
  .total-card{
  text-align: center;
    border-radius: 10px !important;
    padding:10px !important; 
    margin-bottom: 10px;
  }
  .vm--modal {
    background-color:rgb(34, 34, 34) !important;
    box-shadow: 0 1px 10px 0 rgb(34, 34, 34) !important;
  }
  .dragger{
    cursor:grab
  }
  .dragger:active{
    cursor:grabbing
  }
  .clicker{
    cursor:pointer
  }
  .clicker:active{
    cursor: grabbing
  }
  .chart-container {
    position: relative;
    margin: auto;
    height: 80vh;
    width: 80vw;
  }
  .stat-card-text{
    color: grey !important
  }
  
  .DivWithScroll{
      height:100%;
      overflow:auto;
      overflow-x:hidden;
  }
</style>