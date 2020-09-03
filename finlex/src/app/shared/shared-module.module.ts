import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@tusharghoshbd/ngx-datatable';

@NgModule({
  declarations: [
    DataTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule
  ],
  exports: [
    DataTableComponent,
    FormsModule,
  ],
})
export class SharedModuleModule { }
