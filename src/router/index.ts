import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { authorizedGuard } from './guard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../views/dashboard/BaseView.vue'),
    beforeEnter: [authorizedGuard],
    children: [],
  },
  {
    path: '/auth',
    redirect: '/auth/sign_in',
    component: () => import('../views/auth/BaseView.vue'),
    children: [{
      path: 'sign_in',
      component: () => import('../views/auth/SignIn.vue'),
    }],
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
