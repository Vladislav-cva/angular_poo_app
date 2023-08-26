import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

   ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      this.router.navigate(['poo'])
    }
  }
}
