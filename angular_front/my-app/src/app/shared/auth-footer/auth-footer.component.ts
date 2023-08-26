import { Component, Input } from '@angular/core';
import { ModalType as Types, PortalBridgeService } from 'src/app/services/portal-bridge.service';

@Component({
  selector: 'app-auth-footer',
  templateUrl: './auth-footer.component.html',
  styleUrls: ['./auth-footer.component.scss']
})
export class AuthFooterComponent {
  constructor(
    private portalBridge: PortalBridgeService
    ){}

  handleSignIn () {    
    this.portalBridge.open(Types.SignIn)
  }

  handleSignUp () {
    this.portalBridge.open(Types.SignUp)
  }
}
