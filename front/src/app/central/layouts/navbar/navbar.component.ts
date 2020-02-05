import { Component, OnInit } from '@angular/core';
import { globalConfigurations } from 'src/app/services/globalVars';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  lista = [];
  constructor() {
  }

  ngOnInit() {
    this.lista = globalConfigurations['userCompany'];
    console.log(this.lista);
    
  }

  verificar() {
    console.log(globalConfigurations['userCompany']);
    
  }

  cerrarSesion() {
    localStorage.clear();
  }
}
