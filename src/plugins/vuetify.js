import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        background: '#272727',
      },
    },
    dark: true,
    options: {
      customProperties: true,
    }, 
  },
});
