// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule} from '../shared/shared.module';

// Components
import { RegisterComponent } from '../../components/sign-up/register/register.component';
import { PasswordComponent } from '../../components/sign-up/password/password.component';
import { RegisterSuccessComponent } from '../../components/sign-up/register-success/register-success.component';

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
    FormsModule,
    SharedModule
  ]
})
export class RegisterModule { }
