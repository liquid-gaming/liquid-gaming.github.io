<template>
<div>
    <v-col>   
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
        :headers="headers"
        :loading="!layers.length"
        :items="layers"
        :search="search"
        :hide-default-headers="isMobile" 
        :class="{mobile: isMobile}"
        sort-by="gameMode"
        sort-asc
        :footer-props="{
            showFirstLastPage: true,
            firstIcon: 'mdi-arrow-collapse-left',
            lastIcon: 'mdi-arrow-collapse-right',
            'items-per-page-options': [25, 50, 100]
        }">
        <template v-slot:body="{ items }">
            <tbody v-if="!isMobile">
            <tr
                v-for="item in items"
                :key="item.index"
                :search="search"
                @click="selectItem(item)"
                class="clicker"
                >
                  <td class="d-block d-sm-table-cell"> {{ item.mapName }}</td>
                  <td class="d-block d-sm-table-cell"> {{ item.gamemode + " " + item.layerVersion }}</td>
                  <td class="d-block d-sm-table-cell"> {{ item.rawName }}</td>
                  <td class="d-block d-sm-table-cell"> {{ item.team1.faction }}</td>   
                  <td class="d-block d-sm-table-cell"> {{ item.team1.tickets }}</td>   
                  <td class="d-block d-sm-table-cell"> {{ item.team2.faction }}</td>   
                  <td class="d-block d-sm-table-cell"> {{ item.team2.tickets }}</td>   
                </tr>
            </tbody>
            <tbody v-else>
            <tr
                v-for="item in items"
                :key="item.index"
                :search="search"
                @click="selectItem(item)"
                class="clicker"
                >
                <td>
                <ul class="flex-content">
                    <li class="flex-item">Name: {{ item.mapName }}</li>
                    <br>
                    <li class="flex-item">Game Mode: {{ item.gamemode + " " + item.layerVersion }}</li>
                    <li class="flex-item">Raw Name: {{ item.rawName }}</li>
                    <li class="flex-item">Team 1:  {{ item.team1.faction }}</li>   
                    <li class="flex-item">T1 Tickets:  {{ item.team1.tickets }}</li>   
                    <li class="flex-item">Team 2:  {{ item.team2.faction }}</li>   
                    <li class="flex-item">T2 Tickets:  {{ item.team2.tickets }}</li>   
                </ul>
                </td>
            </tr>
            </tbody>
        </template>
        </v-data-table>
    </v-card>
    </v-col>
    <modal name="stat-modal" draggable=".stat-card-text" :resizable="true" :min-width="350" :min-height="450" :max-width="1200" :max-height="740" width="60%" height="80%">
      <v-card class="dragger">
        <div class="stat-card-text">DRAG ME HERE</div>
      </v-card>
      <div class="DivWithScroll">
        <v-layout row wrap class="justify-center">
          <v-flex>
            <div class="text-xl-center ma-1 centerTable">
              <div class="font-weight-bold dragMeHarder">
                {{selectedItem.Name}}
              </div>
            </div>
          </v-flex>
        </v-layout>
        <v-container class="my-2">
            <v-layout row wrap class="justify-center">
              <v-flex>
                <v-hover v-slot:default="{ hover }">
                  <v-card class="text-xs-center ma-2 centerTable vics" :elevation="hover ? 5 : 2">
                    <v-card-text>
                      <h3>Team 1 Vehicles</h3>
                      <div v-for="(vic, index) in selectedItem.team1.vehicles" :key="index">
                        <v-row align="center" justify="center">
                          <p>{{vic.count}}</p>
                          <img :src="getImgUrl(vic.icon)" v-bind:alt="vic.icon" width="35px">
                        </v-row>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-flex>
              <img :src="getImgUrlJpg(selectedItem.rawName)" v-bind:alt="selectedItem.rawName">
              <v-flex>
                <v-hover v-slot:default="{ hover }">
                  <v-card class="text-xs-center ma-2 centerTable vics" :elevation="hover ? 5 : 2">
                    <v-card-text>
                      <h3>Team 2 Vehicles</h3>
                      <div v-for="(vic, index) in selectedItem.team2.vehicles" :key="index">
                        <v-row align="center" justify="center">
                          <p>{{vic.count}}</p>
                          <img :src="getImgUrl(vic.icon)" v-bind:alt="vic.icon" width="35px">
                        </v-row>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
        </v-container> 
      </div>
    </modal>
    <modal name="stat-modal-mobile" draggable=".stat-card-text" width="70%" height="80%">
      <v-card class="dragger">
        <div class="stat-card-text">DRAG ME HERE</div>
      </v-card>
      <div class="DivWithScroll">
        <v-layout row wrap class="justify-center">
          <v-flex>
            <div class="text-xl-center ma-1 centerTable">
              <div class="font-weight-bold dragMeHarder">
                {{selectedItem.Name}}
              </div>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </modal>
    </div>
</template>

<script>
// @ is an alias to /src
//Svg's

export default {
  name: "MapTable",
  components: {
  },
  data () {
      return {
        search: '',
        urlSearchParam: '',
        pagination: {},
        isMobile: false,
        headers: [
          { text: 'Layer Name', value: 'mapName' },
          { text: 'Game Mode', value: 'gamemode' },
          { text: 'Raw Name', value: 'rawName' },
          { text: 'Team 1', value: 'team1.faction' },
          { text: 'Tickets', value: 'team1.tickets' },
          { text: 'Team 2', value: 'team2.faction' },
          { text: 'Tickets', value: 'team2.tickets' }
        ],
        selectedItem: false,
        layers: [],
        loadTable: true
      }
  },
  beforeCreate () {
    this.$axios
        .get('https://raw.githubusercontent.com/Squad-Wiki-Editorial/squad-wiki-pipeline-map-data/master/completed_output/_Current%20Version/finished.json')
        .then(response => {
          this.layers = response.data.Maps
          for (let layer = 0; layer < this.layers.length; layer++) {
            const element = this.layers[layer];

            element.team1.vehicles = element.team1.vehicles.reduce( (a,b) => {
              var i = a.findIndex( x => x.type === b.type);
              return i === -1 ? a.push({ 
                type : b.type,
                count : 1,
                delay : b.delay,
                respawnTime : b.respawnTime,
                rawType : b.rawType,
                icon : b.icon,
                spawner_Size : b.spawner_Size,
              }) : a[i].count++, a;
            }, []);
            
            element.team2.vehicles = element.team2.vehicles.reduce( (a,b) => {
              var i = a.findIndex( x => x.type === b.type);
              return i === -1 ? a.push({ 
                type : b.type,
                count : 1,
                delay : b.delay,
                respawnTime : b.respawnTime,
                rawType : b.rawType,
                icon : b.icon,
                spawner_Size : b.spawner_Size,
              }) : a[i].count++, a;
            }, []);
          }
        })
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
    getImgUrl(pic) {
      return require('../assets/icons/'+pic+".png")
    },
    getImgUrlJpg(pic) {
      if(pic != undefined)
        return require('../assets/maps/thumbnails/'+pic+".jpg")
    }
  },
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
    cursor:grab;
    background-color:#171717;
    padding:1px !important;
    text-align:center;
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

  .vics{
    height:100%;
  }

  .centerTable{
    text-align: center;
  }
  .dragMeHarder{
    color: rgba(255, 255, 255, 0.7);
    font-size:30px;
  }
  .totalNameCard{
    text-align: center;
    background:#303030 !important;
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