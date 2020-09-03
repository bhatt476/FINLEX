import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@tusharghoshbd/ngx-datatable';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    DataTableComponent,
    ErrorPageComponent,
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
