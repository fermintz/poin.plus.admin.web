import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const client = axios.create();

Vue.use(VueAxios, { $http: client });

export default client;
