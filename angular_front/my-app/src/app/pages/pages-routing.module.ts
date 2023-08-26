import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MoreComponent } from './more/more.component';
import { PooOutletComponent } from './poo-outlet/poo-outlet.component';


const routes: Routes = [
  { path: '',  component: PooOutletComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'more', component: MoreComponent},
      { path: '', redirectTo: 'profile', pathMatch: 'full' },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }