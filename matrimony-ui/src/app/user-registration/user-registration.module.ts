import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, 
  MatInputModule,
  MatSelectModule
} from '@angular/material';

import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

@NgModule({
  declarations: [UserRegistrationComponent],
  entryComponents: [UserRegistrationComponent],
  exports: [UserRegistrationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class UserRegistrationModule { }
