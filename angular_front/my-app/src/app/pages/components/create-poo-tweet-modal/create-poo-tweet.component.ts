import { CdkPortal } from '@angular/cdk/portal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CRUDPooService } from 'src/app/services/crud-poo.service';
import { ModalType, PortalBridgeService } from 'src/app/services/portal-bridge.service';

@Component({
  selector: 'app-create-poo-tweet',
  templateUrl: './create-poo-tweet.component.html',
  styleUrls: ['./create-poo-tweet.component.scss']
})
export class CreatePooTweetComponent implements OnInit {
  @ViewChild(CdkPortal, {static: true})
  portal!: CdkPortal

  constructor(
    private portalBridge: PortalBridgeService,
    private createPooService: CRUDPooService
    ){}
  // Need to add state manager 
  // Get current user: {photo, name}

  tweetForm = new FormGroup({
    message: new FormControl<string>(
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ),
  })

  get message () {
    return this.tweetForm.controls.message as FormControl
  }
 
  ngOnInit (): void {    
      this.portalBridge.type 
      .subscribe((type: ModalType) => {
        if (type === ModalType.CreatePoo) {
          this.portalBridge.setModalPortal(this.portal);
        }
      }); 
  }

  submit () {
    if(this.message.valid) {
          this.createPooService.createPoo({
            content: this.tweetForm.value.message as string
          }).subscribe()
    }
    this.message.markAllAsTouched();
  }

  close () {
    this.portalBridge.close()
  }
}
