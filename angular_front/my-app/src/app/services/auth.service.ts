import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private route: Router) { }

  getToken () {
    return localStorage.getItem('token')
  }

  setToken(token: string) {
    return localStorage.setItem('token', token)
  }

  isLoggedIn () {      
    return this.getToken() !== null && this.getToken() !== undefined
  }

  logout () {
    this.route.navigate(['start'])
  }

  //Temporary think

  getItem(itemName: string) {
    return localStorage.getItem(itemName)
  }

  setItem (itemName: string, token: string) {
    return localStorage.setItem(itemName, token)
  }
}
