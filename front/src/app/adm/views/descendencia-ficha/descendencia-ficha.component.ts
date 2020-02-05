import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/models/person';
import { ConnexionService } from 'src/app/services/connexion.service';
import { Router } from '@angular/router';
import { job, Location } from 'src/app/models/schema';
import { globalVars } from 'src/app/services/globalVars';

declare var $: any;

@Component({
  selector: 'app-descendencia-ficha',
  templateUrl: './descendencia-ficha.component.html',
  styleUrls: ['./descendencia-ficha.component.css']
})
export class DescendenciaFichaComponent implements OnInit {

  public person: person;
  public asociados: any[];
  urlGlobal = globalVars.filesDomain;
  ListDepts: Location[] = [];

  constructor(private connexion: ConnexionService, private _router: Router) {
    this.asociados = [];
  }
 
  ngOnInit() {
    this.connexion.get_dataWithParams<Location>('location','?owner=5e14d611d235a7103c0ba4f6').subscribe(reslo => {
      this.ListDepts = reslo;
    }, error => {
      console.log('Hubo un problema al cargar datos. ' + error);
    });

    this.person = new person();
    let myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
    this.connexion.get_dataWithParamsOne<person>('personAssociated', '?userID=' + localStorage.getItem('code').substr(1) + '&companyName=' + myCompanyName[0].companyName).subscribe(
      regis => {
        this.person = regis[0];
        this.asociados = regis[0].associated;
        console.log(regis[0].associated);
      },
      error => {
        var errorMessage = <any>error;
        switch (errorMessage.status) {
          case 400:
            console.log('Usuario ya registrado. \n Por favor intente nuevamente.');
            break;

          default:
            console.log('Ocurrió un error al intentar registrar el usuario. \n Por favor verifique los datos e intente nuevamente.', errorMessage.status);
            break;
        }
      }
    );
  }


}
