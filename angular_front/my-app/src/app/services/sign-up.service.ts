import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { PortalBridgeService } from './portal-bridge.service';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(
    private http: HttpClient,
    private portalBridgeService: PortalBridgeService
  ) { }

  signUp (user: {username: string, email: string, password: string}) {
    return this.http.post(
      'https://nestjsback.onrender.com/auth/register',
      user,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    ).pipe(
      tap((response: any) => {
        if(response.statusCode >= 200 && response.statusCode < 300) {
            this.portalBridgeService.close()    
        // Add notification window
        }
      })
    )
  }


}
