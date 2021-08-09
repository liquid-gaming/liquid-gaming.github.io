<template>
    <v-container class="my-2">
          <v-card>
                <v-toolbar>
                    <template>
                        <v-tabs grow center-active v-model="tab" align-with-title >
                        <v-tabs-slider></v-tabs-slider>
                            <v-tab v-for="item in seasons" :key="item">
                                Season {{ item.Season }}
                            </v-tab>
                        </v-tabs>
                    </template>
                </v-toolbar>

                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in seasons" :key="item">
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
        number: { default: 0 },
        name: {default: "" }
        },
    data: function () {
        return {
        seasons: seasons,
        tab: null,
            items: [
            'web', 'shopping', 'videos', 'images', 'news',
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        };
    },

    ready: function () {
        this.displayNumber = this.number ? this.number : 0;
    },
}
</script>

<style>
</style>
