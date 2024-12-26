import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReportComponent } from './components/report/report.component';



export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'report' ,component: ReportComponent}
];
