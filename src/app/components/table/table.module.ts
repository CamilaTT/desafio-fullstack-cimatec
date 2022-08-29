import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SweetAlert2Module,
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
