import Vue from 'vue';
import moment from 'moment';
import VueMoment from 'vue-moment';

moment.locale('ko');

Vue.use(VueMoment, moment);

Vue.prototype.$confirm = () => Promise.resolve(true);

Vue.filter('amount', (value: number | string) => {
  if (typeof value === 'number') {
    return value.toLocaleString();
  } else {
    return (+value).toLocaleString();
  }
});

Vue.filter('date', (value: string | Date) => {
  return moment(value).format('YYYY-MM-DD');
});

Vue.filter('time', (value: string | Date) => {
  return moment(value).format('HH:mm');
});
