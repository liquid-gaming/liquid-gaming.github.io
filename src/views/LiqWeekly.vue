<template class="liqweekly-temp">
  <div class="background-image">
    <v-container class="liqweekly-home">
      <v-card class="liq-weekly-card">
        <div :class="{'display-4 font-weight-bold ': $vuetify.breakpoint.smAndUp, 'display-2 font-weight-bold': $vuetify.breakpoint.smAndDown}" 
          :style="{'height:100px': $vuetify.breakpoint.smAndUp, 'height:200px': $vuetify.breakpoint.smAndDown}" 
          style="text-align: center">
          LiQ Weekly
        </div>
        <div class="subtitle-1 infoText">
          LiQ Gaming wishes to feature user-submitted clips from our game servers. Videos will be uploaded on a weekly basis featuring the previous week's clips. 
          Whether funny, strange, or just downright exciting, please send us your clips for a chance to be featured in next weeks video.
        </div>
        <div class="subtitle-1 infoText">
          To submit a video, please fill out our form here: <a href="https://docs.google.com/forms/d/e/1FAIpQLScaWvGKMrVxq__zt4zBbkHC0wZlsHqAbG_7sJkewIKcCWmUUQ/viewform">Google Form</a>
        </div>
        <div class="video-container">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/videoseries?list=PLh7PdX_1wyHGY3BQhmds8WxQDnSr_xXUt&autoplay=1"
            frameborder="0" 
            allowfullscreen
          />
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<style lang="css">
  .liqweekly-home {
    min-height: 400px;
    max-height: 1400px;
    display:flex;
  }
  .background-image{
    background-image: url('~@/assets/escheresque_ste.png');
    background-repeat: repeat;
    height: 100% !important;
  }
  .liq-weekly-card  {
    border-radius: 20px !important;
    margin-top: 75px !important;
    padding:35px !important; 
    background-color:rgb(34, 34, 34) !important;
  }
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
  }
  iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .infoText{
    opacity: 0.75; margin:10px 0 40px 0; text-align: center;
  }

@media screen and (max-width: 750px) {
  .video-container {
    padding-bottom: 75%
  }
}
</style>
