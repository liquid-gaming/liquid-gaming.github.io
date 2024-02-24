<template>
  <div class="home background-image">
    <v-container >
      <v-card class="playerstats-card">
        <v-row align="center" justify="center">
          <v-col align="center" justify="center">
            <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
                 :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" >
              Squad Player Stats
            </div>
            <div class="subtitle-1 playerStat-Text">
                LiQ gaming player stats are updated daily at 7 AM EST. Use the search bar to search your in game user name and click the top of a column that you want to sort.
                
                Seasons are 3 months at a time. During this period, we will be tracking the statistics listed below and we will be giving out various prizes!
                Potential rewards range from White-Lists to Game Giveaways and LIQ Merch!!!!! The winners will need to contact the Squad community managers. In addition to this the 
                winners will get Discord tags and be promoted on the server so they can brag about how good they are.
            </div>
            <div>Time Until Season Ends:</div>
            <div style="padding-right: 24px !important;">
              <Countdown end="May 25, 2024"></Countdown>
            </div>
            
            <v-btn router to="/archivedplayerstats"  style="width: 98%;margin-top: 20px !important;" color="#1F2E29">
              View Previous Season
            </v-btn>
           
            <Seasons/>
          </v-col>
        </v-row>
      </v-card>
    </v-container> 
  </div>
</template>

<script>
// @ is an alias to /src
import Seasons from '@/components/Seasons.vue'
import Countdown from 'vuejs-countdown'
import seasons from "@/assets/yamls/seasons.yaml"

//Json files

export default {
  name: "PlayerStats",
  components: {
    Seasons,
    Countdown
  },
  data () {
      return {
        seasons: seasons,
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

  .playerStat-Text{
    opacity: 0.75; margin:10px 0 40px 0;
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
    .previous-btn{
      margin: 20px 12px 0px 12px !important;
      width: 100%;
    }
  }
</style>
