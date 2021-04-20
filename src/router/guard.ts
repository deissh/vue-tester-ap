import { NavigationGuard } from 'vue-router';

export const staffGuard: NavigationGuard = (to, from, next) => {
  console.debug(to.name);
  next();
};

export const authorizedGuard: NavigationGuard = (to, from, next) => {
  console.debug(to.name);
  if (!localStorage.getItem('debug_is_auth')) {
    console.log('Redirect to login: no auth');
    next({ path: '/auth/sign_in' });

    return;
  }

  next();
};
