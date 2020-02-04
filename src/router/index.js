import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/store';
import Books from '../components/books.vue';
import Client from '../components/client_components/client.vue';
import Route from '../components/client_components/route.vue';
import Login from '../components/login.vue';
import Admin from '../components/admin_components/admin.vue';
import Allbuses from '../components/admin_components/allbuses.vue';
import AllSchools from '../components/admin_components/allschools.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Login',
      },
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
    {
      path: '/allbuses',
      name: 'Buses',
      component: Allbuses,
      beforeEnter: (to, from, next) => {
        if (store.state.admin === false) {
          next(false);
        } else {
          next();
        }
      },
    },
    {
      path: '/allschools',
      name: 'Schools',
      component: AllSchools,
      beforeEnter: (to, from, next) => {
        if (store.state.admin === false) {
          next(false);
        } else {
          next();
        }
      },
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
      path: '/route',
      name: 'Route',
      component: Route,
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
      name: 'Login',
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
