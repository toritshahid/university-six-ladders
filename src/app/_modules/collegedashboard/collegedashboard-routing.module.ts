import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegedashboardComponent } from './collegedashboard.component';

const routes: Routes = [{ path: '', component: CollegedashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegedashboardRoutingModule { }
