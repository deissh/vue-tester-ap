import { NavigationGuard } from 'vue-router';

export const havePermissions = (): NavigationGuard =>
  (to, from, next) => {
    console.log(to.name);
  };
