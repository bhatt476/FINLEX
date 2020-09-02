import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from '../data-table/data-table.component';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@tusharghoshbd/ngx-datatable';
import { MainService } from '../../../services/main.service';

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
  providers: [MainService]
})
export class SharedModuleModule { }
