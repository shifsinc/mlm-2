import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './sign/login/login.component';
import { RegisterComponent } from './sign/register/register.component';
import { RecoverComponent } from './sign/recover/recover.component';


const routes: Routes = [
  { path: 'sign/login', component: LoginComponent },
  { path: 'sign/register', component: RegisterComponent },
  { path: 'sign/password', component: RecoverComponent },
  {
    path: 'central',
    loadChildren: () => import('./central/central.module').then(m => m.CentralModule)
  },
  {
    path: '',
    loadChildren: () => import('./adm/adm.module').then(m => m.AdmModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
