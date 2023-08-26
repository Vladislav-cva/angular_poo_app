
import {Injectable} from '@angular/core';

import {BehaviorSubject, Observable} from 'rxjs';
import {ComponentPortal, TemplatePortal} from '@angular/cdk/portal';

export type ModalState = {
  open: boolean
}

export enum ModalType  {
  INITIAL = '',
  SignIn = 'SIGN_IN',
  SignUp = 'SIGN_UP',
  CreatePoo = 'CREATE_POO'
}
@Injectable({providedIn: 'root'})

export class PortalBridgeService {

  public state$ = new BehaviorSubject<ModalState>({open: false});
  private portal$ = new BehaviorSubject<TemplatePortal | undefined | ComponentPortal<any>>(undefined);
  private type$ = new BehaviorSubject<ModalType>(ModalType.INITIAL);
  public skipClick =  false;

  get state(): Observable<ModalState> {
    return this.state$.asObservable();
  }

  get portal(): Observable<TemplatePortal> {
    return this.portal$.asObservable() as any;
  }

  get type(): Observable<ModalType> {
    return this.type$.asObservable();
  }

  open(type?: ModalType) {
    this.type$.next(type as ModalType);
    this.state$.next({open: true});
    // this.skipClick = true;
  }

  close() {
    //Todo: need this if we work with @HostListener() to work with window
    // if(this.skipClick) {
    //   this.skipClick = false;
    //   return 
    // } 
    this.state$.next({open: false});
  }

  setModalPortal(portal: TemplatePortal | ComponentPortal<any>) {
    this.portal$.next(portal);
  }
}
