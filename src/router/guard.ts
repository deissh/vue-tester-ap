import { NavigationGuard } from 'vue-router';
import { AuthRepository } from '@/core/repositories/auth.repository';

export const staffGuard: NavigationGuard = (to, from, next) => {
  if (!AuthRepository.currentUser.is_staff) {
    // todo: alert
    return;
  }

  next();
};

export const authorizedGuard: NavigationGuard = (to, from, next) => {
  if (!AuthRepository.isLogined) {
    next({ path: '/auth/sign_in' });
    return;
  }

  next();
};
