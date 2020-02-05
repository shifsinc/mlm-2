import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/models/person';
import { job } from 'src/app/models/schema';
import { ConnexionService } from 'src/app/services/connexion.service';
import { globalVars } from 'src/app/services/globalVars';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public person: person;
  urlGlobal = globalVars.filesDomain;
  
  constructor(private connexion: ConnexionService) { }

  ngOnInit() {
    this.person = new person();
    this.cargarDatos(localStorage.getItem('code').substring(1));
  }

  cargarDatos(id) {
    this.connexion.get_dataId<person>('person', id).subscribe(
      regis => {
        localStorage.setItem('photo', regis.profile.photo.toString())
        this.person = regis;
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
