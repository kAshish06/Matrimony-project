import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavigationModule } from '../main-navigation/main-navigation.module';
import { ShellComponent } from './components/shell/shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    MainNavigationModule
  ]
})
export class LandingPageModule { }
