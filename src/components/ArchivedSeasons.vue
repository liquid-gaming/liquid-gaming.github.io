<template>
    <v-container class="my-2">
        
        <v-row align="center" justify="center">
          <v-col align="center" justify="center">
            <v-btn router to="/playerstats"  style="width: 100%;margin-top: 20px !important;" color="#1F2E29">
            View Current Season
            </v-btn>
          </v-col>
        </v-row>
          <v-card>
                <v-toolbar>
                    <template>
                        <v-tabs grow center-active v-model="tab" align-with-title>
                        <v-tabs-slider></v-tabs-slider>
                            <v-tab v-model="tab">
                                Previous Season
                            </v-tab>
                        </v-tabs>
                    </template>
                </v-toolbar>
                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap class="justify-center">
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2 topCards" :elevation="hover ? 5 : 2">
                                                <v-card-text>
                                                    <h2>{{highestKills(0).Kills}}</h2>
                                                    <div class="subheading">Top Kills {{highestKills(0).Name}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2 topCards" :elevation="hover ? 5 : 2">
                                                <v-card-text>
                                                    <h2>{{highestDeaths(0).Deaths}}</h2>
                                                    <div class="subheading">Top Deaths {{highestDeaths(0).Name}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2 topCards" :elevation="hover ? 5 : 2">
                                                <v-card-text>
                                                    <h2>{{highestRevives(0).Revives}}</h2>
                                                    <div class="subheading">Top Revives {{highestRevives(0).Name}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                </v-layout>
                                
                                <StatsTables :topStat="seasonsList[0].topStats" :totalStat="seasonsList[0].totalStats" :tab="tab"/>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
    </v-container>    
</template>

<script>
import seasons from "@/assets/yamls/seasons.yaml"
import StatsTables from '@/components/StatsTable.vue'

import previousTopStats from "@/assets/json/PreviousSeason/top-stats.json"
import previousTotalStats from "@/assets/json/PreviousSeason/total-stats.json"

export default {
    name: "Seasons",
    components: {
        StatsTables
    },
    data: function () {
        return {

            seasons: seasons,
            tab: 0,
            seasonsList: [
                {
                    topStats: previousTopStats,
                    totalStats: previousTotalStats
                }
            ]
        };
    },

    methods:{
        highestKills(index){
            let season = this.seasonsList[index];
            if (season.topStats.length == 0) return 
            return season.topStats.reduce((a,b) => Number(a.Kills)> Number(b.Kills) ? a : b)
        },
        highestDeaths(index){
            let season = this.seasonsList[index];
            if (season.topStats.length == 0) return 
            return season.topStats.reduce((a,b) => Number(a.Deaths)> Number(b.Deaths) ? a : b)
        },
        highestRevives(index){
            let season = this.seasonsList[index];
            if (season.topStats.length == 0) return 
            return season.topStats.reduce((a,b) => Number(a.Revives)> Number(b.Revives) ? a : b)
        }
    },
    mounted(){
        this.tab = parseInt(this.$route.query.tab);
    }
}
</script>

<style type="scss">
.topCards{
    text-align: center;
    background:#262626 !important;
}
.harshDockey{
    padding-left: 5px;
    padding-right: 5px;
}
</style>
