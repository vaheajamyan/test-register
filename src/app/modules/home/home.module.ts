// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './home-routing.module';

// Components
import { HomeComponent } from '../../components/home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})

export class HomeModule { }
