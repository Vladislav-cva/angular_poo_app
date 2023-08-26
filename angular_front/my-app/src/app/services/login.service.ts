import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from './auth.service';
import { PortalBridgeService } from './portal-bridge.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private portalBridgeService: PortalBridgeService

  ) { }

  
  login (user: {email: string, password: string}) {
    return this.http.post(
      'https://nestjsback.onrender.com/auth/login',
      user
    ).pipe(
      tap((response: any) => {
        if(response.statusCode >= 200 && response.statusCode < 300) {
          console.log(response);
          
          this.authService.setToken(response.data.accessToken)  
          //Temporary solution
          this.authService.setItem('name', response.data.username)

          this.portalBridgeService.close()    
        }
      })
    )
  }
}
