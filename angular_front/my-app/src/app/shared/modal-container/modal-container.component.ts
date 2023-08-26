import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent {
 @Input() title!: string;
 @Input() buttonType?: string;
 @Input() firstBtnName: string = 'Submit';
 @Input() secondBtnName: string = 'Cancel'

 @Output() close: EventEmitter<void> = new EventEmitter();
 @Output() send?: EventEmitter<void> = new EventEmitter();


 //To stop spreading events to child!
//  @HostListener('click', ['$event'])
//  handleClick (event: Event) {
//   event.stopPropagation()
//  }

 handleClose () {    
  this.close.emit()
 }
}
