import { CdkPortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ModalType, PortalBridgeService } from 'src/app/services/portal-bridge.service';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-sign-up-modal',
  templateUrl: './sign-up-modal.component.html',
  styleUrls: ['./sign-up-modal.component.scss']
})
export class SignUpModalComponent implements OnInit, OnDestroy {
  constructor(
    private portalBridge: PortalBridgeService,
    private registerService: SignUpService,
    ) {}

  @ViewChild(CdkPortal, {static: true})
  portal!: CdkPortal
  public typeSubscription!: Subscription;

  signUpForm = new FormGroup({
    username: new FormControl(
      '',
      Validators.required
    ),
    email: new FormControl('', 
    [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',
    [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/)
    ])
  })
  
  get name () {
    return this.signUpForm.controls.username
  }

  get email () {
    return this.signUpForm.controls.email
  }

  get password () {
    return this.signUpForm.controls.password
  }
  
  ngOnInit(): void {
    this.typeSubscription = this.portalBridge.type
    .subscribe((type: ModalType) => {
      if (type === ModalType.SignUp) {
        this.portalBridge.setModalPortal(this.portal);
      }
    });

  }

  ngOnDestroy () {
    this.typeSubscription.unsubscribe()
  }

  signUp() {
    if(!this.signUpForm.valid) {
      this.signUpForm.markAllAsTouched();
    }
    
    this.registerService.signUp(this.signUpForm.value as {username: string, email: string, password: string}).subscribe()
  }

  handleCloseView () {
    this.portalBridge.close()
  }


}
