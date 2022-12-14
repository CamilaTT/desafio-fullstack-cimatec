import { ModalModule } from './../../components/modal/modal.module';
import { ChartModule } from './../../components/chart/chart.module';

import { CardModule } from '../../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../../components/header/header.module';
import { TableModule } from 'src/app/components/table/table.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HeaderModule,
    CardModule,
    TableModule,
    ChartModule,
    ModalModule 
  ] 
})
export class DashboardModule { }
