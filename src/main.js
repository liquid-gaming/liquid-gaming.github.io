import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';
import vuetify from './plugins/vuetify';
import VueLazyload from 'vue-lazyload'
import VueNumber from 'vue-number-animation'
import VModal from 'vue-js-modal'
import VueMobileDetection from 'vue-mobile-detection'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faJs, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSocialSharing from 'vue-social-sharing'

Vue.use(VueSocialSharing);
library.add(faCoffee, faJs, faVuejs);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
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
