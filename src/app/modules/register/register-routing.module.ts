// Modules

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Components

import { RegisterComponent } from '../../components/register/register.component';


const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
