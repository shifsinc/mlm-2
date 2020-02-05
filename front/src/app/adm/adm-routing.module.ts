import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmComponent } from "./adm.component";
import { MainComponent } from "./views/main/main.component";
import { ProfileComponent } from './views/profile/profile.component';
import { StaffListComponent } from './views/staff-list/staff-list.component';
import { InvitationComponent } from './views/invitation/invitation.component';
import { DescendenciaFichaComponent } from './views/descendencia-ficha/descendencia-ficha.component';
import { DescendenciaProfileComponent } from './views/descendencia-profile/descendencia-profile.component';
import { InvitationListComponent } from './views/invitation-list/invitation-list.component';
import { DescendenciaListComponent } from './views/descendencia-list/descendencia-list.component';

const routes: Routes = [
  {
    path: '', component: AdmComponent, children:[
      { path: '', component: MainComponent }
    ]
  },
  //{ path: '', redirectTo: 'main', pathMatch: 'full' },

  {
    path: 'main',
    component: AdmComponent,
    children: [{path: '', component: MainComponent}]
  },
  {
    path:'profile',
    component: AdmComponent,
    children: [{ path: '', component: ProfileComponent}]
  },
  {
    path:'job',
    component: AdmComponent,
    children: [{ path: '', component: StaffListComponent}]
  },
  {
    path:'invitacion',
    component: AdmComponent,
    children: [{ path: '', component: InvitationComponent}]
  },
  {
    path:'invitacion/:_id',
    component: AdmComponent,
    children: [{ path: '', component: InvitationComponent}]
  },
  {
    path:'invitacionLista',
    component: AdmComponent,
    children: [{ path: '', component: InvitationListComponent}]
  },
  {
    path:'descendenciaFicha',
    component: AdmComponent,
    children: [{ path: '', component: DescendenciaFichaComponent}]
  },
  {
    path:'descendenciaFicha/:id',
    component: AdmComponent,
    children: [{ path: '', component: DescendenciaProfileComponent}]
  },
  {
    path:'descendenciaLista',
    component: AdmComponent,
    children: [{ path: '', component: DescendenciaListComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
