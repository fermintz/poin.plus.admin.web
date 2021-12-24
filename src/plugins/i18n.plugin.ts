import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  ko: require('@/assets/lang/ko-KR.ts').default,
  en: require('@/assets/lang/en-US.ts').default,
};

export default new VueI18n({
  locale: 'ko',
  fallbackLocale: 'ko',
  messages,
});
