import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { AuthFooterComponent } from './shared/auth-footer/auth-footer.component';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { SignInModalComponent } from './components/start-page/components/sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from './components/start-page/components/sign-up-modal/sign-up-modal.component';
import { ModalModule } from './components/modal/modal.module';
import { StartPageComponent } from './components/start-page/start-page.component';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    SidebarComponent,
    AuthFooterComponent,
    SignInModalComponent,
    SignUpModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    ModalModule,
    PortalModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
