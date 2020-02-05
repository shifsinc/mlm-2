import { Component, OnInit } from '@angular/core';
import { globalConfigurations, globalVars } from 'src/app/services/globalVars';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  lista = [];
  urlGlobal = globalVars.filesDomain;
  perfil: string;
  
  constructor() {
  }

  ngOnInit() {
    this.lista = globalConfigurations['userCompany'];
    this.perfil = localStorage.getItem('photo');
  }

  verificar() {
    console.log(globalConfigurations['userCompany']);
    
  }

  cerrarSesion() {
    localStorage.clear();
  }
}
