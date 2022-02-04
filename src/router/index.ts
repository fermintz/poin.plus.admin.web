import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  
  {
    path: '/',
    component: () => import('@/layout/base/base.vue'),
    children:[
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
        meta:{
          title:'포인플러스',
          homeBtn:false,
        },
      },
      {
        path: '/shop',
        name: 'shop',
        component: () => import('@/views/shop/shop.vue'),
        meta:{
          title:'매장관리',
          homeBtn:true,
          remoteBtn:false,
        },
      },
      {
        path: '/eq-list',
        name: 'eq-list',
        component: () => import('@/views/eq-list/eq-list.vue'),
        meta:{
          title:'장비관리',
          homeBtn:true,
          remoteBtn:false,
        },
      },
      {
        path: '/eq-add',
        name: 'eq-add',
        component: () => import('@/views/eq-add/eq-add.vue'),
        meta:{
          title:'장비등록',
          homeBtn:true,
          remoteBtn:false,
        },
      },
      {
        path: '/eq-remote',
        name: 'eq-remote',
        component: () => import('@/views/eq-remote/eq-remote.vue'),
        meta:{
          title:'장비원격제어',
          homeBtn:true,
          remoteBtn:true,
        },
      },
      {
        path: '/payment-list',
        name: 'payment-list',
        component: () => import('@/views/payment-list/payment-list.vue'),
        meta:{
          title:'결제내역조회',
          homeBtn:true,
          remoteBtn:false,
        },
      },
      {
        path: '/sales-shop',
        name: 'sales-shop',
        component: () => import('@/views/sales-shop/sales-shop.vue'),
        meta:{
          title:'매장별 매출조회',
          homeBtn:true,
          remoteBtn:false,
        },
      },
      {
        path: '/sales-eq',
        name: 'sales-eq',
        component: () => import('@/views/sales-eq/sales-eq.vue'),
        meta:{
          title:'장비별 매출조회',
          homeBtn:true,
          remoteBtn:false,
        },
      },
    ],
  },
  {
    path: '/shop-detail',
    name: 'shop-detail',
    component: () => import('@/views/shop-detail/shop-detail.vue'),
  },
  {
    path: '/eq-detail',
    name: 'eq-detail',
    component: () => import('@/views/eq-detail/eq-detail.vue'),
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
