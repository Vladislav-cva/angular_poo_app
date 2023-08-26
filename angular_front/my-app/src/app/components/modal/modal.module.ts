import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortalModule} from '@angular/cdk/portal';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PortalModule
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
