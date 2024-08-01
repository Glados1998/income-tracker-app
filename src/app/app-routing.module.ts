import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {AccountComponent} from "./features/account/account.component";
import {LoginComponent} from "./features/login/login.component";
import {RegisterComponent} from "./features/register/register.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    component: HomeComponent
  },
  {
    path: 'account',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    component: AccountComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    component: LoginComponent
  },
  {
    path: 'register',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    component: RegisterComponent
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
