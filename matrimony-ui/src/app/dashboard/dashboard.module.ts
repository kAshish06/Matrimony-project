import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { MatCardModule, MatTabsModule } from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const dashboardRoutes: Route = {
  path: 'dashboard', component: DashboardComponent
}
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [
    
  ]
})
export class DashboardModule { }
