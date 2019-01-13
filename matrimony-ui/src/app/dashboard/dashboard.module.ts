import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const dashboardRoutes: Route = {
  path: 'dashboard', component: DashboardComponent
}
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
