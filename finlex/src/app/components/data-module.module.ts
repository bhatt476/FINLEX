import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataModuleRoutingModule } from './data-module-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModuleModule } from '../shared/shared-module.module';
import { DetailsComponent } from './details/details.component';
import { MainTable2Component } from './main-table2/main-table2.component';
import { MainTable3Component } from './main-table3/main-table3.component';

@NgModule({
  declarations: [MainComponent, DetailsComponent, MainTable2Component, MainTable3Component],
  imports: [
    CommonModule,
    DataModuleRoutingModule,
    SharedModuleModule
  ]
})
export class DataModuleModule { }
