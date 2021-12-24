import Vue from 'vue';
import { AxiosInstance } from 'axios';

declare module 'raw-loader!*';

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosInstance;
    $confirm: () => Promise<boolean>;
  }
}
