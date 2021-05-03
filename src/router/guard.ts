import { NavigationGuard } from 'vue-router';
import { AuthRepositories } from '@/core/repositories/auth.repositories';

export const staffGuard: NavigationGuard = (to, from, next) => {
  console.debug(to.name);
  next();
};

export const authorizedGuard: NavigationGuard = (to, from, next) => {
  const auth = new AuthRepositories();

  if (!auth.isLogined) {
    next({ path: '/auth/sign_in' });
    return;
  }

  next();
};
