import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { Role } from '@/core/dto/role';
import { havePermissions } from '@/router/guard';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    component: () => import('../views/dashboard/BaseView.vue'),
    children: [],
    beforeEnter: havePermissions(Role.nobody),
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
