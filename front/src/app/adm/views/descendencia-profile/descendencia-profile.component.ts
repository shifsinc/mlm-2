import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';
import { person } from 'src/app/models/person';
import { job } from 'src/app/models/schema';
import { globalVars } from 'src/app/services/globalVars';

@Component({
  selector: 'app-descendencia-profile',
  templateUrl: './descendencia-profile.component.html',
  styleUrls: ['./descendencia-profile.component.css']
})
export class DescendenciaProfileComponent implements OnInit {

  public person: person;
  public asociados: job[];
  urlGlobal = globalVars.filesDomain;
  ListDepts: Location[] = [];
  
  constructor(private connexion: ConnexionService, private ruta: ActivatedRoute, private _router: Router) {
    this.asociados = [];
  }

  ngOnInit() {
    this.connexion.get_data<Location>('location').subscribe(reslo => {
      this.ListDepts = reslo;
    }, error => {
      console.log('Hubo un problema al cargar datos. ' + error);
    });

    this.person = new person();
    this.cargarDatos(this.ruta.snapshot.params['id']);
    console.log(this.ruta.snapshot.params['id']);
    
  }

  cargarDatos(id) {
    let myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
    this.connexion.get_dataWithParamsOne<person>('personAssociated', '?userID=' + id + '&companyName=' + myCompanyName[0].companyName).subscribe(
      regis => {
        this.person = regis[0];
        this.asociados = regis[0].associated;
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

  verAsociado(event) {
    this._router.navigate(['/descendenciaFicha/' + event]);
    this.cargarDatos(event);
  }

}
