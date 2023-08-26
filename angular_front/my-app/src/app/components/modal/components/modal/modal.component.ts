import {  CdkPortalOutlet, PortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ModalState, PortalBridgeService } from 'src/app/services/portal-bridge.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild(CdkPortalOutlet, {static: false}) portalOutlet!: PortalOutlet;
  
  constructor(public portalBridge: PortalBridgeService) {}
  
  view!: HTMLBaseElement

  ngOnInit() {     
    this.portalBridge.portal
      .subscribe((portal: TemplatePortal) => {        
        if (!!portal) {
          this.portalOutlet.detach();
          this.portalOutlet.attach(portal);
        }
      });
  }

  //Todo: to do something with window/ catch event/ close screen to clicking on empty space
  // @HostListener('window:click')
  // close () {    
  //   this.portalBridge.close()
  //   console.log('hello');
    
  // }

  ngAfterViewInit () {
    // need to figure out how to work with capturing
    this.view = document.getElementById('modal') as HTMLBaseElement;
    if(this.view) {

      fromEvent(this.view, 'click').subscribe((event: any) =>{ 
        if(event.target.id === 'modal') {
          this.portalBridge.close()
        }
      });
    }
  }
}



