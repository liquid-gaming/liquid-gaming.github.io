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
                
                Seasons will begin Aug 10th 2021 and will run for 3 months. During this time, we will be tracking the statistics listed below and we will be giving out various prizes!
                Potential rewards range from White-Lists to Game Giveaways and LIQ Merch!!!!! The winners will need to contact the Squad community managers. In addition to this the 
                winners will get Discord tags and be promoted on the server so they can brag about how good they are.
            </div>
            <Seasons :player="players"/>
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
            <v-card v-resize="onResize">
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
                :hide-default-headers="isMobile" 
                :class="{mobile: isMobile}"
                sort-by="Kills"
                sort-desc
                :footer-props="{
                  showFirstLastPage: true,
                  firstIcon: 'mdi-arrow-collapse-left',
                  lastIcon: 'mdi-arrow-collapse-right',
                  'items-per-page-options': [10, 25, 50, 100]
                }">
                <template v-slot:body="{ items }">
                  <tbody v-if="!isMobile">
                    <tr
                      v-for="item in items"
                      :key="item.ID"
                      :search="search"
                      @click="selectItem(item)"
                      class="clicker"
                      >
                        <td class="d-block d-sm-table-cell"> {{ item.index }}</td>
                        <td class="d-block d-sm-table-cell"> {{ item.Name }}</td>
                        <td class="d-block d-sm-table-cell"> {{ item.Kills }}</td>
                        <td class="d-block d-sm-table-cell"> {{ item.Deaths }}</td>
                        <td class="d-block d-sm-table-cell"> {{ item.KD }}</td>
                        <td class="d-block d-sm-table-cell"> {{ item.Wounds }}</td>
                        <td class="d-block d-sm-table-cell"> {{ item.Revives }}</td>       
                      </tr>
                  </tbody>
                  <tbody v-else>
                    <tr
                      v-for="item in items"
                      :key="item.ID"
                      :search="search"
                      @click="selectItem(item)"
                      class="clicker"
                      >
                      <td>
                        <ul class="flex-content">
                          <li class="flex-item">Rank: {{ item.index }}</li>
                          <li class="flex-item">Name: {{ item.Name }}</li>
                          <br>
                          <li class="flex-item">Kills: {{ item.Kills }}</li>
                          <li class="flex-item">Deaths: {{ item.Deaths }}</li>
                          <li class="flex-item">K/D: {{ item.KD }}</li>
                          <li class="flex-item">Wounds: {{ item.Wounds }}</li>
                          <li class="flex-item">Revives: {{ item.Revives }}</li>       
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
    <modal name="stat-modal" draggable=".stat-card-text" :resizable="true" :min-width="350" :min-height="450" :max-width="800" :max-height="740" width="30%" height="70%">
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
        <v-container class="my-2">
            <v-layout row wrap class="justify-center">
              <v-flex>
                <div class="text-xs-center ma-3">
                  <v-layout row wrap class="justify-center">
                    <ShareNetwork
                      network="facebook"
                      :url="sharing.url + selectedItem.ID"
                      :title="sharing.title"
                      :description="sharing.description"
                      :hashtags="sharing.hashtags"
                      :quote="sharing.quote"
                    >
                    <v-btn medium color="#3b5998" dark>
                      <v-img :src="facebookIcon" />
                      Facebook
                    </v-btn>
                    </ShareNetwork>
                  </v-layout>
                </div>
              </v-flex>
              <v-flex>
                <div class="text-xs-center ma-3">
                  <v-layout row wrap class="justify-center">
                    <ShareNetwork
                      network="twitter"
                      :url="sharing.url + selectedItem.ID"
                      :title="sharing.title"
                      :description="sharing.description"
                      :hashtags="sharing.hashtags"
                    >
                    <v-btn medium color="#00acee" dark>
                      <v-img :src="twitterIcon" />
                      Twitter
                    </v-btn>
                    </ShareNetwork>
                  </v-layout>
                </div>
              </v-flex>
              <v-flex>
                <div class="text-xs-center ma-3">
                  <v-layout row wrap class="justify-center">
                    <ShareNetwork
                      network="whatsapp"
                      :url="sharing.url + selectedItem.ID"
                      :title="sharing.title"
                      :description="sharing.description"
                      :hashtags="sharing.hashtags"
                    >
                    <v-btn medium color="#25D366" dark>
                      <v-img :src="whatsappIcon" />
                      WhatsApp
                    </v-btn>
                    </ShareNetwork>
                  </v-layout>
                </div>
              </v-flex>
              <v-flex>
                <div class="text-xs-center ma-3">
                  <v-layout row wrap class="justify-center">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn medium color="#5c5c5c" dark @click="doCopy" v-bind="attrs" v-on="on">
                          <v-img :src="shareThisIcon" />
                          Share
                        </v-btn>
                      </template>
                      <span>Copy to Clipboard</span>
                    </v-tooltip>
                  </v-layout>
                </div>
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
        <v-container class="my-2">
            <v-layout row wrap class="justify-center">
              <v-flex>
                <div class="text-xs-center ma-3">
                  <v-layout row wrap class="justify-center">
                    <ShareNetwork
                      network="facebook"
                      :url="sharing.url + selectedItem.ID"
                      :title="sharing.title"
                      :description="sharing.description"
                      :hashtags="sharing.hashtags"
                      :quote="sharing.quote"
                    >
                    <v-btn medium color="#3b5998" dark>
                      <v-img :src="facebookIcon" />
                      Facebook
                    </v-btn>
                    </ShareNetwork>
                  </v-layout>
                </div>
              </v-flex>
              <v-flex>
                <div class="text-xs-center ma-3">
                  <v-layout row wrap class="justify-center">
                    <ShareNetwork
                      network="twitter"
                      :url="sharing.url + selectedItem.ID"
                      :title="sharing.title"
                      :description="sharing.description"
                      :hashtags="sharing.hashtags"
                    >
                    <v-btn medium color="#00acee" dark>
                      <v-img :src="twitterIcon" />
                      Twitter
                    </v-btn>
                    </ShareNetwork>
                  </v-layout>
                </div>
              </v-flex>
              <v-flex>
                <div class="text-xs-center ma-3">
                  <v-layout row wrap class="justify-center">
                    <ShareNetwork
                      network="whatsapp"
                      :url="sharing.url + selectedItem.ID"
                      :title="sharing.title"
                      :description="sharing.description"
                      :hashtags="sharing.hashtags"
                    >
                    <v-btn medium color="#25D366" dark>
                      <v-img :src="whatsappIcon" />
                      WhatsApp
                    </v-btn>
                    </ShareNetwork>
                  </v-layout>
                </div>
              </v-flex>
              <v-flex>
                <div class="text-xs-center ma-3">
                  <v-layout row wrap class="justify-center">
                    <ShareNetwork
                      network="sms"
                      :url="sharing.url + selectedItem.ID"
                      :title="sharing.title"
                      :description="sharing.description"
                      :hashtags="sharing.hashtags"
                    >
                    <v-btn medium color="green" dark>
                      <v-img :src="smsIcon" />
                      SMS
                    </v-btn>
                    </ShareNetwork>
                  </v-layout>
                </div>
              </v-flex>
              <v-flex>
                <div class="text-xs-center ma-3">
                  <v-layout row wrap class="justify-center">
                    <v-btn medium color="#5c5c5c" dark @click="doCopy">
                      <v-img :src="shareThisIcon" />
                      Share
                    </v-btn>
                  </v-layout>
                </div>
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
import Seasons from '@/components/Seasons.vue'
//Svg's
import FacebookSvg from "@/assets/ShareButtonIcons/facebook.svg"
import ShareThisSvg from "@/assets/ShareButtonIcons/sharethis.svg"
import SmsSvg from "@/assets/ShareButtonIcons/sms.svg"
import TwitterSvg from "@/assets/ShareButtonIcons/twitter.svg"
import WhatsappSvg from "@/assets/ShareButtonIcons/whatsapp.svg"
//Json files
import topStats from "@/assets/json/top-stats.json"
import totalStats from "@/assets/json/total-stats.json"

export default {
  name: "seeding",
  components: {
    AnimatedNumber,
    BarChart,
    Seasons
  },
  data () {
      return {
        facebookIcon: FacebookSvg,
        shareThisIcon: ShareThisSvg,
        smsIcon: SmsSvg,
        twitterIcon: TwitterSvg,
        whatsappIcon: WhatsappSvg,
        search: '',
        urlSearchParam: '',
        pagination: {},
        totals: totalStats,
        isMobile: false,
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
          {
            text: 'Id', value: 'ID', align: ' d-none' 
          },
        ],
        players: topStats.sort((a, b) => parseFloat(b.Kills) - parseFloat(a.Kills)),
        selectedItem: false,
        averageStats: {},
        sharing: {
          url: 'https://liqgaming.com/#/playerstats?username=',
          title: 'LiQ Gaming Player Stats',
          description: 'Come check out my player stats for squad at LiQGaming.com!!',
          quote: 'Come check out my player stats for squad at LiQGaming.com!!',
          hashtags: 'JoinSquad,LiQGaming',
        },
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
    onResize() {
      if (window.innerWidth < 769)
        this.isMobile = true;
      else
        this.isMobile = false;
    },
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
    doCopy: function () {
      this.$copyText(this.sharing.url + this.selectedItem.ID)
    }
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
      var player = this.players.find(o=>o.ID == this.urlSearchParam);
      if(player != undefined || player != null){
        this.search = player.Name;
      }
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

  @media screen and (max-width: 768px) {
    .mobile table.v-table tr {
      max-width: 100%;
      position: relative;
      display: block;
    }

    .mobile table.v-table tr:nth-child(odd) {
      border-left: 6px solid deeppink;
    }

    .mobile table.v-table tr:nth-child(even) {
      border-left: 6px solid cyan;
    }

    .mobile table.v-table tr td {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #f5f5f5;
      height: auto;
      padding: 10px;
    }

    .mobile table.v-table tr td ul li:before {
      content: attr(data-label);
      padding-right: .5em;
      text-align: left;
      display: block;
      color: #999;

    }
    .v-datatable__actions__select
    {
      width: 50%;
      margin: 0px;
      justify-content: flex-start;
    }
    .mobile .theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row) {
      background: transparent;
    }

    .flex-content {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    .flex-item {
      padding: 5px;
      width: 50%;
      height: 40px;
      font-weight: bold;
    }
    }
</style>