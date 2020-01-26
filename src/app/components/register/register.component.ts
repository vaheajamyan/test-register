import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerFormGroup: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    phoneNumber: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    city: new FormControl(null)
  })

  public successed: boolean = false;

  constructor() {}

  ngOnInit() {
  }

  public onSubmit(): void {
      this.registerFormGroup.markAllAsTouched();
      this.successed =  this.registerFormGroup.valid ? true : false
      console.log(this.successed)
  }
  
  get username(): FormControl {
    return this.registerFormGroup.get('username') as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.registerFormGroup.get('phoneNumber') as FormControl;
  }

  get email(): FormControl {
    return this.registerFormGroup.get('email') as FormControl
  }

}
