import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [
  
    HomeComponent,
       LoginComponent,
       RegisterComponent,
       AccountComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent
  ]
})
export class FeaturesModule { }
