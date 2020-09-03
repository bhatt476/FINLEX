import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'data/table1'
  },
  {
    path: 'data',
    // canActivate: [AppAuthGuard],
    loadChildren: () =>   import('./components/data-module.module').then( m => m.DataModuleModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
