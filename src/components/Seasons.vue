<template>
    <v-container class="my-2">
          <v-card>
                <v-toolbar>
                    <template>
                        <v-tabs grow center-active v-model="tab" align-with-title>
                        <v-tabs-slider></v-tabs-slider>
                            <v-tab v-model="tab">
                                Current Season
                            </v-tab>
                            <v-tab v-for="index in seasons" :key="index.Season">
                                Season {{ index.Season }}
                            </v-tab>
                            <v-tab v-model="tab">
                                Before Times
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
                    <v-tab-item v-for="(item, index) in seasons" :key="item.Season">
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap class="justify-center">
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2 topCards" :elevation="hover ? 5 : 2">
                                                <v-card-text>
                                                    <h2>{{highestKills(index + 1).Kills}}</h2>
                                                    <div class="subheading">Top Kills {{highestKills(index + 1).Name}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2 topCards" :elevation="hover ? 5 : 2">
                                                <v-card-text>
                                                    <h2>{{highestDeaths(index + 1).Deaths}}</h2>
                                                    <div class="subheading">Top Deaths {{highestDeaths(index + 1).Name}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2 topCards" :elevation="hover ? 5 : 2">
                                                <v-card-text>
                                                    <h2>{{highestRevives(index + 1).Revives}}</h2>
                                                    <div class="subheading">Top Revives {{highestRevives(index + 1).Name}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2 topCards" :elevation="hover ? 5 : 2">
                                                <v-card-text>
                                                    <h2>{{item.TimeplayedCount}}</h2>
                                                    <div class="subheading">Top Time Played {{item.TopTimePlayed}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                </v-layout>
                                <StatsTables :topStat="seasonsList[item.Season].topStats" :totalStat="seasonsList[item.Season].totalStats" :tab="tab"/>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap class="justify-center">
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2 topCards" :elevation="hover ? 5 : 2">
                                                <v-card-text class="harshDockey">
                                                    <h2>7475</h2>
                                                    <div class="subheading">Top Kills 『LiQ』HarshDonkey</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2 topCards" :elevation="hover ? 5 : 2">
                                                <v-card-text>
                                                    <h2>4858</h2>
                                                    <div class="subheading">Top Deaths Kossy</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg2 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2 topCards" :elevation="hover ? 5 : 2">
                                                <v-card-text>
                                                    <h2>4817</h2>
                                                    <div class="subheading">Top Revives 0xd34df00d</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg5 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2 topCards" :elevation="hover ? 5 : 2">
                                                <v-card-text class="harshDockey">
                                                    <h2>1,676.97 Hours</h2>
                                                    <div class="subheading">Top Time Played 『LiQ』HarshDonkey</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                </v-layout>
                                <StatsTables :topStat="archivedTopStat" :totalStat="archivedTotalStat" :tab="tab"/>
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
//Json files
import archivedTopStats from "@/assets/json/ArchivedStats/top-stats.json"
import archivedTotalStats from "@/assets/json/ArchivedStats/total-stats.json"

import currentTopStats from "@/assets/json/top-stats.json"
import currentTotalStats from "@/assets/json/total-stats.json"

import topStats1 from "@/assets/json/Season1/top-stats.json"
import totalStats1 from "@/assets/json/Season1/total-stats.json"
export default {
    name: "Seasons",
    components: {
        StatsTables
    },
    data: function () {
        return {
            archivedTopStat: archivedTopStats,
            archivedTotalStat: archivedTotalStats,
                        
            topStatsOne: topStats1,
            totalStatsOne: totalStats1,

            seasons: seasons,
            tab: 0,
            seasonsList: [
                {
                    topStats: currentTopStats,
                    totalStats: currentTotalStats
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
        this.seasonsList.push(
            {
                topStats: this.topStatsOne,
                totalStats: this.totalStatsOne
            }
        );
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
