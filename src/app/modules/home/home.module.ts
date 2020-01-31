// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './home-routing.module';
import { SharedModule} from '../shared/shared.module';

// Components
import { HomePage } from '../../pages/home/home-page.component';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
  ]
})

export class HomeModule { }
