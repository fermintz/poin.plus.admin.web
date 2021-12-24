import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import vuetify from './plugins/vuetify.plugin';
import '@/assets/styles/global.scss';
import i18n from '@/plugins/i18n.plugin';
import '@/plugins/axios.plugin';
import '@/plugins/filters.plugin';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
