<template>
  <div class="home background-image">
    <v-container>
      <div class="announcements-card">
        <v-row align="left" justify="left">
          <v-flex just>
            <v-container>
              <v-row align="left" justify="left">
                <v-card
                    :elevation="5"
                    class="recruitment-card">
                    <div 
                    :class="{'display-3 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                    LiQuid Gaming Announcements
                    </div>
                </v-card>
              </v-row>
            </v-container>
          </v-flex>
          <v-flex just>
            <v-row align="left" justify="left" style="margin:0 10px 0 10px">
                <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item
                    v-for="(item, index) in announcements"
                    :key="index"
                    :color="item.color"
                    :icon="item.icon"
                    fill-dot>
                      <v-card dark>
                          <v-card-title>{{item.title}}</v-card-title>
                          <v-card-subtitle>{{item.date}}</v-card-subtitle>
                          <v-card-text class="#272727 text--primary preWrapped">{{item.content}}</v-card-text>
                        <div v-if="item.images != null">
                          <img class="announcement-image image-fit" :src="getImgUrl(item.images)" alt="">
                        </div>
                      </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-row>
          </v-flex>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
//Json files 

import announcements from "@/assets/yamls/announcements.yaml"

export default {
  name: "Announcements",
  data () {
    return {
      announcements: announcements,
      loader: null,
      loading: false,
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
  methods:{
    getImgUrl(pic) {
      return require('../assets/'+pic)
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
  .announcements-card{
    border-radius: 20px !important;
    margin-top: 45px !important;
    padding:35px !important; 
  }
  .announcement-image {
    max-height: 600px;
    width: 100%;
    object-fit: contain;
  }
  .v-card__text,
.v-card__title {
  word-break: normal !important;
}
.preWrapped {
  white-space: pre-wrap;
}
.recruitment-card{
  background:#222222 !important;
  padding:30px !important;
  border-radius: 10px !important;
  margin:0 10px 0 10px !important;
  width:100% !important;
}
.competitive-card{
  background:#222222 !important;
  padding:30px !important;
  border-radius: 10px !important;
  margin:30px 10px 0 10px !important;
}
.opacity-text{
  opacity: 0.75 !important; 
  margin-top:10px !important;
}
</style>