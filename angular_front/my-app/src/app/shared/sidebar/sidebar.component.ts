import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { sideBarData } from './helper';
import { AuthService } from 'src/app/services/auth.service';
import { ModalType, PortalBridgeService } from 'src/app/services/portal-bridge.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() isLogged!: boolean
  constructor (
    public authService: AuthService,
    private portalBridge: PortalBridgeService
    ) {}

  sideBar: any = []

  ngOnChanges({isLogged}: SimpleChanges) {
    this.sideBar = sideBarData(isLogged.currentValue)
  }

  createPooTweet () {
    this.portalBridge.open(ModalType.CreatePoo)
  }

}
