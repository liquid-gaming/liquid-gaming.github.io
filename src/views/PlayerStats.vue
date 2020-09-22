<template>
  <div class="home background-image">
    <v-container >
      <v-card style="border-radius: 20px;margin-top: 75px;padding:35px !important; background-color:rgb(34, 34, 34)">
        <v-row align="left" justify="left">
          <v-col>
            <div :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}" :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" >
              Squad Player Stats
            </div>
            <div class="subtitle-1" style="opacity: 0.75; margin:10px 0 40px 0">
                LiQ gaming player stats are updated on a weekly basis, showing your stats for the past month. 
                Use the search bar to search your in game user name and click the top of a column that you want to sort.
            </div>
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
                </v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//Json files
import topStats from "@/assets/json/top-stats.json"

export default {
  name: "seeding",
  data () {
      return {
        search: '',
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
        players: topStats.sort((a, b) => parseFloat(b.Kills) - parseFloat(a.Kills))
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
</style>