import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CRUDPooService } from 'src/app/services/crud-poo.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(
   public pooService: CRUDPooService,
   public authService: AuthService
  ) {}

  formSearch = new FormGroup({
    search: new FormControl('')
  })

  ngOnInit() {
    this.pooService.getPoo().subscribe()
  }

  //Todo: need to find out how to do search using onchange through props???
  onSearch () {
    console.log(this.formSearch.controls.search.value);    
  }

}
