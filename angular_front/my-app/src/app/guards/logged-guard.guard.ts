import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


export const loggedGuardGuard: CanActivateFn = () => {
  const auth = new AuthService(new Router);
  
  if(!auth.isLoggedIn()) {    
    auth.logout()
    
    return false
  }  
  return true;
};
