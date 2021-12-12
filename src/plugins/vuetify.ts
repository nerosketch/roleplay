import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/src/locale/ru';

Vue.use(Vuetify);

export default new Vuetify({
  theme: { dark: true },
  lang: {
    locales: { ru },
    current: 'ru',
  },
  icons: {
    iconfont: 'fa',
  },
});
