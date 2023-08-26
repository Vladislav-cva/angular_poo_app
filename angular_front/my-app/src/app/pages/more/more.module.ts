import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreComponent } from '../more/more.component';
import { MoreRoutingModule } from './more-routing.module';



@NgModule({
  declarations: [
    MoreComponent
  ],
  imports: [
    CommonModule,
    MoreRoutingModule
  ]
})
export class MoreModule { }
