import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path: 'login', component : LoginComponent },
  { path: 'register', component : RegisterComponent},
  { path: 'forget-password', component : ForgetPasswordComponent},
  { path: 'change-password', component : ChangePasswordComponent},
  { path: 'user-profile', component: UserProfileComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthModule { }
