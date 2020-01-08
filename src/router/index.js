import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/store';
import Books from '../components/books.vue';
import Ping from '../components/ping.vue';
import Login from '../components/login.vue';
import Admin from '../components/admin.vue';

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
      path: '/ping',
      name: 'Ping',
      component: Ping,
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
