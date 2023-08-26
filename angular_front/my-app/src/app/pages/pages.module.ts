import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PagesRoutingModule } from './pages-routing.module';
import { PooOutletComponent } from './poo-outlet/poo-outlet.component';
import { CreatePooTweetComponent } from './components/create-poo-tweet-modal/create-poo-tweet.component';
import { PortalModule } from '@angular/cdk/portal';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PooContentComponent } from './profile/components/poo-content/poo-content.component';

@NgModule({
  declarations: [
    ProfileComponent,
    PooOutletComponent,
    CreatePooTweetComponent,
    PooContentComponent
      ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PortalModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
