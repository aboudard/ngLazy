import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const appRoutes: Routes = [
    {
      path: '', component: HomeComponent,
    },
    {
      path: 'users', loadChildren: () => import('./users/users.routes').then((m) => m.usersRoutes),
    },
    {
      path: 'orders', loadChildren: () => import('ng-core').then((m) => m.ordersRoutes),
    },
    {
      path: 'bills', loadChildren: () => import('ng-core').then((m) => m.billsRoutes),
    }
];