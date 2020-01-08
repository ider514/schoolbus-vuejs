import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/store';
import Books from '../components/books.vue';
import Client from '../components/client.vue';
import Login from '../components/login.vue';
import Admin from '../components/admin.vue';
import RouteTable from '../components/routeTable.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login',
      },
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
    {
      path: '/routeTable',
      name: 'RouteTable',
      component: RouteTable,
    },
    {
      path: '/client',
      name: 'Client',
      component: Client,
      beforeEnter: (to, from, next) => {
        if (store.state.client === false) {
          next(false);
        } else {
          next();
        }
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      beforeEnter: (to, from, next) => {
        if (store.state.admin === false) {
          next(false);
        } else {
          next();
        }
      },
    },
  ],
});
