import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

@NgModule({
  declarations: [UserRegistrationComponent],
  entryComponents: [UserRegistrationComponent],
  exports: [UserRegistrationComponent],
  imports: [
    CommonModule
  ]
})
export class UserRegistrationModule { }
