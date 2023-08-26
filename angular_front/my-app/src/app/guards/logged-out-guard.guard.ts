import { CanDeactivateFn } from '@angular/router';

export const loggedOutGuardGuard: CanDeactivateFn<unknown> = () => {
  localStorage.removeItem('token');  
  return true;
}

