import { Component, Input,  forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => InputComponent),
        multi: true
    }
]
})
export class InputComponent implements ControlValueAccessor {
  @Input() label?: string;
  @Input() variant?: string;
  @Input() type: string = 'text'
  @Input() id?: string;
  @Input() isRequired: boolean = false;
  @Input() placeholder: string = ''
  @Input() valid?: boolean; 

  public onChange!: (value: string) => void;
  public onTouched!: () => void;

  value?: string

  //need to find out how to do validation inside component and pass error messages as a props
  onInputValueChange(event: Event): void {
    const targetDivElement = event.target as HTMLInputElement;
    const value = targetDivElement.value;

    this.onChange?.(value)
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn    
  }

}
