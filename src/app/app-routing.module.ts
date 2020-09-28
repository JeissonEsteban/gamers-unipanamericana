import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationLayoutComponent } from './layouts/authentication-layout/authentication-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:AuthenticationLayoutComponent, loadChildren: () => import('./pages/authentication/authentication.module').then(m => m.AuthenticationModule)},
  {path:'dashboard',component:DefaultLayoutComponent, loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
