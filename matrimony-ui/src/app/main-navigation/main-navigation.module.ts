import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, 
  MatInputModule
} from '@angular/material';

import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
@NgModule({
  declarations: [MainNavComponent, LoginComponent],
  exports: [MainNavComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [LoginService]
})
export class MainNavigationModule { }
