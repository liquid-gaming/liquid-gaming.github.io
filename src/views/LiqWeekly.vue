<template>
  <div class="home background-image">
    <v-container >
      <v-card class="liq-weekly-card">
        <div :class="{'display-4 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
          :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" 
          style="text-align: center">
          LiQ Weekly
        </div>
        <div class="subtitle-1" style="opacity: 0.75; margin:10px 0 40px 0; text-align: center">
          LiQ Gaming wishes to feature user-submitted clips from our game servers. Videos will be uploaded on a weekly basis featuring the previous week's clips. 
          Whether funny, strange, or just downright exciting, please send us your clips for a chance to be featured in next weeks video.
        </div>
        <div class="subtitle-1" style="opacity: 0.75; margin:10px 0 40px 0; text-align: center">
          To submit a video, please send clips to <strong>Akuma</strong> in our LiQ Community Discord!
        </div>
        <div class="video-container">
          <div class="story-vuetube-container">
            <vue-tube
              :videoId="videoId" 
              :isPlaylist="isPlaylist"
              :playerVars='playerVars'
              iframeAllow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"
            >
              <template #thumbnail>
                <img src="@/assets/liq-weekly.png" alt="" class="thumbnail-image">
              </template>
            </vue-tube>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LiqWeekly",
  data() {
    return {
      videoId: 'PLh7PdX_1wyHGY3BQhmds8WxQDnSr_xXUt',
      isPlaylist: true,
      playerVars: {
        autoplay: 1
      }
    }
  },
};
</script>

<style lang="css">
  .background-image{
    background-image: url('~@/assets/escheresque_ste.png');
    background-repeat: repeat;
    height: 100% !important;
  }
  .liq-weekly-card {
    border-radius: 20px !important;
    margin-top: 75px !important;
    padding:35px !important; 
    background-color:rgb(34, 34, 34) !important;
  }
  .video-container {
    background-color: #fff;
    
  }
  .thumbnail-image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 50%;
    height: 100%;
  }
</style>