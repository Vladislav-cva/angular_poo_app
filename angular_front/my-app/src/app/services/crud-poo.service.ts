import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { PortalBridgeService } from './portal-bridge.service';
import { AuthService } from './auth.service';
import { ICreatePoo, IPoo, PooData } from '../models/poo/poo';

@Injectable({
  providedIn: 'root'
})
export class CRUDPooService {

  constructor(
    private http: HttpClient,
    private bridgeService: PortalBridgeService,
    private authService: AuthService,
  ) { }

  poos?: IPoo[] = []

  createPoo (data: {content: string}) {
    const token = this.authService.getToken()
    
    return this.http.post<ICreatePoo>(
      'https://nestjsback.onrender.com/tweet',
      data,
      {
        headers : {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
      ).pipe(
        tap(
          (response: ICreatePoo) => {
            if(response.statusCode  >= 200 && response.statusCode < 300) {
              //Temporary solution to rerender component after creating new post
              this.poos?.push(response.data)
              this.bridgeService.close()
            }
          } 
        )
      )
  }

  getPoo (modes: string = 'recent', order?: string) {
    const token = this.authService.getToken()

    return this.http.get<PooData>(
      `https://nestjsback.onrender.com/tweet?mode=${modes}&orderBy=${order}`,
      {
        headers : {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    ).pipe(
      tap(
        (response: PooData) => this.poos = response.data.tweets
      )
    )
  }
}
