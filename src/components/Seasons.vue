<template>
    <v-container class="my-2">
          <v-card>
                <v-toolbar>
                    <template>
                        <v-tabs grow center-active v-model="tab" align-with-title >
                        <v-tabs-slider></v-tabs-slider>
                            <v-tab>
                                Current Season
                            </v-tab>
                            <v-tab v-for="index in seasons" :key="index.Season">
                                Season {{ index.Season }}
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
                                            <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;background:#262626 !important;">
                                                <v-card-text>
                                                    <h2>{{highestKills.Kills}}</h2>
                                                    <div class="subheading">Top Kills {{highestKills.Name}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;background:#262626 !important;">
                                                <v-card-text>
                                                    <h2>{{highestDeaths.Deaths}}</h2>
                                                    <div class="subheading">Top Deaths {{highestDeaths.Name}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;background:#262626 !important;">
                                                <v-card-text>
                                                    <h2>{{highestRevives.Revives}}</h2>
                                                    <div class="subheading">Top Revives {{highestRevives.Name}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item v-for="item in seasons" :key="item.Season">
                        <v-card flat>
                            <v-card-text>
                                <v-layout row wrap class="justify-center">
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;background:#262626 !important;">
                                                <v-card-text>
                                                    <h2>{{item.KillsCount}}</h2>
                                                    <div class="subheading">Top Kills {{item.TopKills}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;background:#262626 !important;">
                                                <v-card-text>
                                                    <h2>{{item.DeathsCount}}</h2>
                                                    <div class="subheading">Top Deaths {{item.TopDeaths}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;background:#262626 !important;">
                                                <v-card-text>
                                                    <h2>{{item.RevivesCount}}</h2>
                                                    <div class="subheading">Top Revives {{item.TopRevives}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4 lg3 xl2>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card class="text-xs-center ma-2" :elevation="hover ? 5 : 2" style="text-align: center;background:#262626 !important;">
                                                <v-card-text>
                                                    <h2>{{item.TimeplayedCount}}</h2>
                                                    <div class="subheading">Top Time Played {{item.TopTimePlayed}}</div>
                                                </v-card-text>
                                            </v-card>
                                        </v-hover>
                                    </v-flex>
                                </v-layout>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
    </v-container>    
</template>

<script>
import seasons from "@/assets/yamls/seasons.yaml"
export default {
    name: "Seasons",
    props: { 
        player: {}
        },
    data: function () {
        return {
            seasons: seasons,
            tab: null
        };
    },

    computed:{
        highestKills(){
            if (this.player.length == 0) return 
            return this.player.reduce((a,b) => Number(a.Kills) > Number(b.Kills) ? a : b)
        },
        highestDeaths(){
            if (this.player.length == 0) return 
            return this.player.reduce((a,b) => Number(a.Deaths) > Number(b.Deaths) ? a : b)
        },
        highestRevives(){
            if (this.player.length == 0) return 
            return this.player.reduce((a,b) => Number(a.Revives) > Number(b.Revives) ? a : b)
        }
    },
 
    ready: function () {
        this.displayNumber = this.number ? this.number : 0;
    },
}
</script>

<style>
</style>
