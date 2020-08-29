import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        background: '#1ECBE1',
      },
    },
    dark: true    
  },
});
