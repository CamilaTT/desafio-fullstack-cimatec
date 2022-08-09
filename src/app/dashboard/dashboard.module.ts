import { TableModule } from './../components/table/table.module';
import { CardModule } from './../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../components/header/header.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    CardModule,
    TableModule
  ]
})
export class DashboardModule { }