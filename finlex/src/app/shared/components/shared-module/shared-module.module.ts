import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from '../data-table/data-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    FormsModule,
    NgSelectModule
  ],
  exports: [
    DataTableComponent,
    FormsModule,
    NgSelectModule
  ]
})
export class SharedModuleModule { }
