import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataModuleRoutingModule } from './data-module-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModuleModule } from './../shared/components/shared-module/shared-module.module';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [MainComponent, DetailsComponent],
  imports: [
    CommonModule,
    DataModuleRoutingModule,
    SharedModuleModule
  ]
})
export class DataModuleModule { }
