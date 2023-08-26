import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loggedGuardGuard } from './guards/logged-guard.guard';
import { loggedOutGuardGuard } from './guards/logged-out-guard.guard';
import { AuthGuard } from './guards/auth-guard.guard';
import { StartPageComponent } from './components/start-page/start-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start',  component: StartPageComponent },
  { 
    path: 'poo', 
    canActivate: [AuthGuard],
    canDeactivate:[AuthGuard],
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
