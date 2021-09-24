import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegedashboardRoutingModule } from './collegedashboard-routing.module';
import { CollegedashboardComponent } from './collegedashboard.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    CollegedashboardComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    CollegedashboardRoutingModule,
  ]
})
export class CollegedashboardModule { }
