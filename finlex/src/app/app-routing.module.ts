import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/components/error-page/error-page.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'data/table1'
  },
  {
    path: 'data',
    loadChildren: () =>   import('./components/data-module.module').then( m => m.DataModuleModule)
  },
  {
    path: 'error',
    component: ErrorPageComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
