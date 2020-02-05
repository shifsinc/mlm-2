import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { AdmRoutingModule } from './adm-routing.module';
import { AdmComponent } from './adm.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ModulesModule } from "../modules/modules.module";
import { MainComponent } from './views/main/main.component';
import { ProfileComponent } from './views/profile/profile.component';
import { StaffListComponent } from './views/staff-list/staff-list.component';
import { InvitationComponent } from './views/invitation/invitation.component';
import { ShowErrorsComponent } from './tools/show-errors/show-errors.component';
import { DescendenciaFichaComponent } from './views/descendencia-ficha/descendencia-ficha.component';
import { DescendenciaProfileComponent } from './views/descendencia-profile/descendencia-profile.component';
import { DescendenciaListComponent } from './views/descendencia-list/descendencia-list.component';
import { InvitationListComponent } from './views/invitation-list/invitation-list.component';
import { ExpedidoPipe } from '../pipes/expedido.pipe';
import { NombrePipe } from '../pipes/nombre.pipe';


@NgModule({
  declarations: [
    AdmComponent, 
    NavbarComponent, 
    SidebarComponent, 
    FooterComponent, 
    MainComponent, 
    ProfileComponent, 
    StaffListComponent, 
    InvitationComponent,
    ShowErrorsComponent,
    DescendenciaFichaComponent,
    DescendenciaProfileComponent,
    InvitationListComponent,
    DescendenciaListComponent,
    ExpedidoPipe,
    NombrePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxDatatableModule,
    AdmRoutingModule,
    ModulesModule
  ]
})
export class AdmModule { }
