import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRegistrationModule } from '../user-registration/user-registration.module';

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    UserRegistrationModule
  ]
})
export class AppRoutingModule { }
