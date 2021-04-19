import { NavigationGuard } from 'vue-router';
import { Role } from '@/core/dto/role';

export const havePermissions = (require: Role): NavigationGuard => (to, from, next) => {
  console.log(to.name);
  next();
};
