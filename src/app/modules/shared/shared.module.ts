// Modules
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Components
import { ValidationInputComponent } from '../../uikit/validation-input/validation-input.component';
import { CloseButtonComponent } from '../../uikit/close-button/close-button.component';
import { ButtonComponent } from '../../uikit/button/button.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [ValidationInputComponent, CloseButtonComponent, ButtonComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationInputComponent,
    CloseButtonComponent,
    ButtonComponent,
  ]
})

export class SharedModule {
}
