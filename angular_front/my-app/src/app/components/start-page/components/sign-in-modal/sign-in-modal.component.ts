import { CdkPortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { ModalType, PortalBridgeService } from 'src/app/services/portal-bridge.service';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})
export class SignInModalComponent implements OnInit, OnDestroy {
  constructor(
    private portalBridge: PortalBridgeService,
    private loginService: LoginService,
    private router: Router,
    ) {}

  @ViewChild(CdkPortal, {static: true})
  portal!: CdkPortal
  public typeSubscription!: Subscription;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  get email () {
    return this.loginForm.controls.email;
  }

  get password () {
    return this.loginForm.controls.password;
  }

  login() {
    if(!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
    }
    
    this.loginService.login(this.loginForm.value as {email: string, password: string}).subscribe({
         next: () => this.router.navigate(['poo'])
    })
  }

  handleCloseView () {
    this.portalBridge.close()
  }

  ngOnInit(): void {
    this.typeSubscription = this.portalBridge.type
    .subscribe((type: ModalType) => {
      if (type === ModalType.SignIn) {
        this.portalBridge.setModalPortal(this.portal);
      }
    });    
  }

  ngOnDestroy () {
    this.typeSubscription.unsubscribe()
  }
}
