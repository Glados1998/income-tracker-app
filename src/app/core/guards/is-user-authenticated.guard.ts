import { CanActivateFn } from '@angular/router';

export const isUserAuthenticatedGuard: CanActivateFn = (route, state) => {
  return true;
};
