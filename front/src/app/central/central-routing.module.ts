import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentralComponent } from './central.component';
import { ComboComponent } from './views/combo/combo.component';
import { ContextComponent } from './views/context/context.component';
import { TypeContextComponent } from './views/type-context/type-context.component';


const routes: Routes = [
  //{ path: '', redirectTo: 'central', pathMatch: 'full' },
  {
    path: 'ubicacion',
    component: CentralComponent,
    children: [{path: '', component: ComboComponent}]
  },
  {
    path: 'contexto',
    component: CentralComponent,
    children: [{path: '', component: ContextComponent}]
  },
  {
    path: 'tipo-contexto',
    component: CentralComponent,
    children: [{path: '', component: TypeContextComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentralRoutingModule { }
