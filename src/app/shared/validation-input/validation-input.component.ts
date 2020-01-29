import {Component, OnInit, Input} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-validation-input',
  templateUrl: './validation-input.component.html',
  styleUrls: ['./validation-input.component.css']
})
export class ValidationInputComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;
  @Input() errorTexts: { [key: string]: string };
  @Input() errors: string[] = [];
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor() {
  }

  ngOnInit() {
  }

  public get valid(): boolean {
    return this.required &&
      this.formControl.valid;
  }

  public get invalid(): boolean {
    return this.required &&
      this.formControl.invalid &&
      (this.formControl.dirty || this.formControl.touched);
  }

  public get formControl(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }

  public get required() {
    if (!this.formControl.validator) {
      return false;
    }
    const validator = this.formControl.validator({} as AbstractControl);
    return !!(validator && validator.required);
  }
}
