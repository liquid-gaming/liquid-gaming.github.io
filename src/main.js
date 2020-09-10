import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';
import vuetify from './plugins/vuetify';
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-135785528-2',
  router
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
