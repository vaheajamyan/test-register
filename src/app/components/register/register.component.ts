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
  });

  public successed = false;
  public errors: { [key: string]: string } = {
    required: 'Неправильно заполнено поле',
    email: 'Неверный адрес электронной почты',
    minlength: 'Минимум 4 символа',
  };

  constructor() {}

  ngOnInit() {
  }

  public onSubmit(): void {
      this.registerFormGroup.markAllAsTouched();
      this.successed =  this.registerFormGroup.valid;
      console.log(this.registerFormGroup);
  }
}
