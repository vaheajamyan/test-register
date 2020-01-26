import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  public passwordGroup: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(null, [ Validators.required, Validators.minLength(6), this.comparePassword()]),
  })
  public successed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public onSubmit(): void {
    this.passwordGroup.markAllAsTouched();
    this.successed =  this.passwordGroup.valid ? true : false
    console.log(this.successed)
  }

  private comparePassword(): { [key: string]: boolean } | any {
    return (control: FormControl) => {
      const password = control.value;
      if (password) {
        if (password !== this.password.value) {
          return {
            matchPassword: true
          };
        }
        return null;
      }
      return null;
    };
  }

  get password(): FormControl {
    return this.passwordGroup.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.passwordGroup.get('confirmPassword') as FormControl;
  }

}
