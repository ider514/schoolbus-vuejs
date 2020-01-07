import Vue from 'vue';
import Router from 'vue-router';
import Books from '../components/books.vue';
import Ping from '../components/ping.vue';
import Test from '../components/test.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      path: '/test',
      name: 'test',
      component: Test,
    },
  ],
});
