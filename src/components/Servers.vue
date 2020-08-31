<template>
  <v-card
        target="_blank"
        elevation="5"
        style="border-radius: 20px; margin:5px;"
        max-width="950px">
    <v-card-text>
      <div class="title mt-2 titleColour">{{server.name}}</div>
      <div>{{server.description}}</div>
      <div class="title mt-2 titleColour">Battmetrics</div>
      <v-layout>
        <template>
          <div>
            <iframe :src="'https://cdn.battlemetrics.com/b/standardVertical/' + server.battlemetricId + '.html?foreground=%23EEEEEE&linkColor=%231185ec&lines=%23333333&background=%23222222&chart=players%3A24H&chartColor=%23FF0700&maxPlayersHeight=300'" frameborder=0 style="border:0" name="rnoga"></iframe>
          </div>
        </template>
      </v-layout>
    </v-card-text>
      <div>
        <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header class="titleColour">Rules</v-expansion-panel-header>
            <v-expansion-panel-content>
              <template v-slot:actions>
                  <v-icon color="primary">accessibility</v-icon>
              </template>
              <v-flex v-for="(rule, index) in server.rules" :key="index">
                <v-card class="card-container" style="margin:7px;background:#262626;">
                  <v-card-text class="px-4">
                    <v-card-title>
                      <h5 class="titleColour">{{index+1}}: {{rule.title}}</h5>
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

<script lang="application/javascript">
  window.addEventListener('message',function(e)
  {
    if(e.data.uid&&e.data.type==='sizeUpdate')
    {
      var i = document.querySelector('iframe[name="'+e.data.uid+'"]');
      i.style.width = e.data.payload.width;i.style.height = e.data.payload.height;
    }
  });
</script>
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

<style lang="scss" scoped>
  .titleColour{
    color:#e6e6e6;
  }
</style>