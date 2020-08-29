<template>
  <v-card
            target="_blank"
            elevation="5"
            style="border-radius: 20px; margin:5px;"
            max-width="950px">
    <v-card-title>
      <v-layout>
          <v-row align="center" justify="center">
            <v-flex>
              <div class="title mt-2" style="color: rgba(0, 0, 0, 0.7);">{{server.name}}</div>
              <template>
                <!-- <div></div> -->
              </template>
            </v-flex>
          </v-row>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <div>{{server.description}}</div>
      <div class="title mt-2">Battmetrics</div>
      <v-layout>
        <template>
          <!-- <div></div> -->
        </template>
      </v-layout>
    </v-card-text>
      <div>
        <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header>Rules</v-expansion-panel-header>
            <v-expansion-panel-content>
              <template v-slot:actions>
                  <v-icon color="primary">accessibility</v-icon>
              </template>
              <v-flex v-for="(rule, index) in server.rules" :key="index">
                <v-card class="card-container" style="margin:7px;">
                  <v-card-text class="px-4 grey--text">
                    <v-card-title>
                      <h5>{{index+1}}: {{rule.title}}</h5>
                    </v-card-title>
                    <v-card-subtitle>
                      <p>{{rule.description}}</p>
                    </v-card-subtitle>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>
      </div>
  </v-card>
</template>

<script>
export default {
  props: {
    server: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  methods: {
    logo(name) {
      return require("../assets/" + name);
    }
  }
};
</script>

<style>
</style>