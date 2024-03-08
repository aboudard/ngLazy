import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module')
    .then((m) => m.UsersModule),
  },
  {
    path: 'orders',
    loadChildren: () => import('ng-core')
    .then((m) => m.OrdersModule),
  },
  {
    path: 'bills',
    loadChildren: () => import('ng-core')
    .then((m) => m.BillsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
