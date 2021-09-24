import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./_modules/collegedashboard/collegedashboard.module').then(m => m.CollegedashboardModule) },
  { path: 'collegeDashboard', loadChildren: () => import('./_modules/collegedashboard/collegedashboard.module').then(m => m.CollegedashboardModule) },
   { path: 'header', loadChildren: () => import('./_modules/header/header.module').then(m => m.HeaderModule) },
   { path: 'footer', loadChildren: () => import('./_modules/footer/footer.module').then(m => m.FooterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
