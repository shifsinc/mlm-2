import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CentralRoutingModule } from './central-routing.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ComboComponent } from './views/combo/combo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CentralComponent } from './central.component';
import { ContextComponent } from './views/context/context.component';
import { TypeContextComponent } from './views/type-context/type-context.component';
import { ContextPipe } from "../pipes/context.pipe";

@NgModule({
  declarations: [
    CentralComponent,
    ComboComponent,
    NavbarComponent, 
    SidebarComponent, 
    FooterComponent, ContextComponent, TypeContextComponent, ContextPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CentralRoutingModule
  ]
})
export class CentralModule { }
