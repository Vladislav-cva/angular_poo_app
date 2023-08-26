import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  // styleUrls: ['./button.component.scss', '../auth-footer/auth-footer.component.scss']
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() className?: string;
  @Input() name!: string;
  @Input() type?: string;
  @Input() variant?: string;

  @Output() click: EventEmitter<void> = new EventEmitter();

  handleClick () {
    this.click.emit()
  }
}
