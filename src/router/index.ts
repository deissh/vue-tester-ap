import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    redirect: '/auth/sign_in', // default path
    component: import('../views/auth/BaseView.vue'),
    children: [{
      path: 'sign_in',
      component: import('../views/auth/SignIn.vue'),
    }],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
