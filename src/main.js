import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';
import vuetify from './plugins/vuetify';
import VueLazyload from 'vue-lazyload'
import VueNumber from 'vue-number-animation'
import VModal from 'vue-js-modal'
import VueMobileDetection from 'vue-mobile-detection'
import VueRouter from 'vue-router'
import VueSocialSharing from 'vue-social-sharing'
import VueClipboard from 'vue-clipboard2'
import VueYoutube from 'vue-youtube'
import { VueTube } from 'vuetube';
import 'vuetube/dist/vuetube.css'
 
Vue.config.productionTip = false

Vue.use(VueYoutube)
Vue.component('VueTube', VueTube)
Vue.use(VueClipboard)
Vue.use(VueSocialSharing);
Vue.use(VueRouter)
Vue.use(VueMobileDetection)
Vue.use(VModal,
  {dynamicDefaults: {
    draggable: true,
    resizable: true,
    height: 'auto'
  }
})
Vue.use(VueNumber)
Vue.use(VueLazyload)
Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-177609629-1',
  router
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
