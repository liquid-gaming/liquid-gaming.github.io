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
                                <h2><AnimatedNumber :number="total.count"/></h2>     
                                <div class="subheading">Total {{total.name}}</div>                                       
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
    <modal name="stat-modal" draggable=".window-header" :max-width="500" :max-height="740" width="30%" height="50%">
      <v-card style="background-color:#171717;padding:1px !important;text-align:center;" class="dragger">
        <div class="window-header">DRAG ME HERE</div>
      </v-card>
      <div>
        <h2>{{selectedItem.Name}}</h2>
          <div width="70%" height="70%">
            <doughnut-chart :player="selectedItem" :average="averageStats"></doughnut-chart>
          </div>
      </div>
    </modal>
  </div>
</template>

<script>
// @ is an alias to /src
import AnimatedNumber from "@/components/AnimatedNumber.vue"
import DoughnutChart from '@/components/Doughnut'
//Json files
import topStats from "@/assets/json/top-stats.json"
import totalStats from "@/assets/json/total-stats.json"

export default {
  name: "seeding",
  components: {
    AnimatedNumber,
    DoughnutChart
  },
  data () {
      return {
        search: '',
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
      this.$modal.show(
        'stat-modal',
        { draggable: true }
      );
    },
    unSelectItem () {
      this.selectedItem = false
    },
  },
  mounted(){
    this.averageStats.Kills = Math.round((((this.totals.find(o=>{return o.name === "Kills";}).count) / (this.players.length / 2)) + Number.EPSILON) * 10) / 10;
    this.averageStats.Deaths = Math.round((((this.totals.find(o=>{return o.name === "Deaths";}).count) / (this.players.length / 2)) + Number.EPSILON) * 10) / 10;
    this.averageStats.Wounds = Math.round((((this.totals.find(o=>{return o.name === "Wounds";}).count) / (this.players.length / 2)) + Number.EPSILON) * 10) / 10;
    this.averageStats.Revives = Math.round((((this.totals.find(o=>{return o.name === "Revives";}).count) / (this.players.length / 2)) + Number.EPSILON) * 10) / 10;
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
</style>