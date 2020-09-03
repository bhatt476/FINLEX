import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { MainTable2Component } from './main-table2/main-table2.component';
import { MainTable3Component } from './main-table3/main-table3.component';
const routes: Routes = [
  {
    path: 'table1',
    component: MainComponent
  },
  {
    path: 'table2',
    component: MainTable2Component
  },
  {
    path: 'table3',
    component: MainTable3Component
  },
  {
    path: 'details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DataModuleRoutingModule { }
