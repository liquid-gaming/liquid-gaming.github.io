<template>
  <div class="home background-image">
    <v-container >
      <v-card style="border-radius: 20px;margin-top: 75px;padding:35px !important; background-color:rgb(34, 34, 34)">
        <v-card>
          <v-card-title>
            Player Stats
            <v-spacer></v-spacer>
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
            sort-by="kills"
            sort-desc
            :footer-props="{
              showFirstLastPage: true,
              firstIcon: 'mdi-arrow-collapse-left',
              lastIcon: 'mdi-arrow-collapse-right',
            }">
            </v-data-table>
        </v-card>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//Json files

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
            value: 'name',
          },
          { text: 'Kills', value: 'kills' },
          { text: 'Deaths', value: 'deaths' },
          { text: 'K/D', value: 'kd' },
          { text: 'Revives', value: 'revives' },
          { text: 'Wounds', value: 'wounds' },
        ],
        players: [
          {
            "name": "123",
            "wounds": "1196",
            "kills": "929",
            "deaths": "587",
            "kd": "1.6",
            "revives": "46"
          },
          {
            "name": "test",
            "wounds": "333",
            "kills": "222",
            "deaths": "444",
            "kd": "6.9",
            "revives": "12"
          }      
        ]
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