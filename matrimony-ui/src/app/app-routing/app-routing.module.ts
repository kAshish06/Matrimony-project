import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserRegistrationModule } from '../user-registration/user-registration.module';
import { UserRegistrationComponent } from '../user-registration/components/user-registration/user-registration.component';
import { ShellComponent } from '../landing-page/components/shell/shell.component';
const routes: Routes = [
  // { path}
  { path: '', component: ShellComponent},
  { path: 'registration', component: UserRegistrationComponent}
]
@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    UserRegistrationModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
