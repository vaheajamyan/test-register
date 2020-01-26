// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

// Components
import { RegisterComponent } from '../../components/register/register.component';
import { PasswordComponent } from '../../components/password/password.component';
import { RegisterSuccessComponent } from '../../components/register-success/register-success.component';


@NgModule({
  declarations: [
    RegisterComponent,
    PasswordComponent,
    RegisterSuccessComponent,
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegisterModule { }
