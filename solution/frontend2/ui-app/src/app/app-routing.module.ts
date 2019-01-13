import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  { path:'home', component: ApplicationsComponent},
  { path:'chart', component:ChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
