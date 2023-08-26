import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    ModalContainerComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    ModalContainerComponent,
    PageLayoutComponent
  ]
})
export class SharedModule { }
