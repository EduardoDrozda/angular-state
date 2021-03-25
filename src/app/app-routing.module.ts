import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'count',
    pathMatch: 'full'
  },
  {
    path: 'count',
    loadChildren: () => import('./pages/counter/counter.module')
      .then(m => m.CounterModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module')
      .then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
