import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {InterceptorService} from "./services/interceptor.service"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './components/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
