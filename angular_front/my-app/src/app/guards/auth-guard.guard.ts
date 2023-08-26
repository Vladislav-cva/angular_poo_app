import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate() {            
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['start']);
      return false;
    }
    return true;
  }

  canDeactivate() {
    if (confirm('Are you sure?')) {
      localStorage.removeItem('token');
      return true;
    }
    return false;
  }
}