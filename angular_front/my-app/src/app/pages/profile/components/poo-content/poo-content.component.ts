import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poo-content',
  templateUrl: './poo-content.component.html',
  styleUrls: ['./poo-content.component.scss']
})
export class PooContentComponent {
  @Input() poo?: any;


  handleLike () {
    console.log('like');
    
  }
}
