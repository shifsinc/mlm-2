import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';
import { isNullOrUndefined } from 'util';

import { job, address, field, contact, profile, Location } from "../../models/schema";
import { invitation } from "../../models/invitation";
import { ShowErrorsComponent } from 'src/app/adm/tools/show-errors/show-errors.component';
import { TypeContext } from 'src/app/models/contextclases';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public invitation: invitation;
  public job: job;
  public contact: contact;
  public profile: profile;
  public address: address;
  public field: field;
  correct: boolean = false;

  ListCompany: TypeContext[] = [];
  ListRol: Location[] = [];

  ListLOC: Location[] = [];
  ListLOCMain: Location[] = [];
  listDepa: Location[] = [];
  depasCI: Location[] = [];
  listCiudad: Location[] = [];
  listZona: Location[] = [];

  constructor(private connexion: ConnexionService, private _router: Router) {
    this.invitation = new invitation();
    this.job = new job();
    this.contact = new contact();
    this.profile = new profile();
    this.address = new address();
    this.field = new field();
  }

  ngOnInit() {
    this.connexion.get_data<Location>('location').subscribe(reslo => {
      this.ListLOC = reslo;
      this.ListLOCMain = reslo.filter(LOC => LOC.typecon_id == '5e14d334d235a7103c0ba4f1');
      this.depasCI = this.ListLOC.filter(LOC => LOC.owner == '5e14d611d235a7103c0ba4f6');
    }, error => {
      console.log('Hubo un problema al cargar datos. ' + error);
    });

    this.connexion.get_data<TypeContext>('typecontext').subscribe(reslo => {
      this.ListCompany = reslo.filter(LOC => LOC.context_id == '5e252fb391a1412bf8709a69');
    }, error => {
      console.log('Hubo un problema al cargar datos. ' + error);
    });

    this.invitation.contact = this.contact;
    this.invitation.profile = this.profile;
    this.contact.address = this.address;
    this.contact.address.city = this.field;
    this.contact.address.state = this.field;
    this.contact.address.zone = this.field;
    //this.invitation.contact = this.contact;
  }

  onRegister() {
    this.agregarDireccion();
    this.invitation.job = { ciMain: '', companyName: this.job.companyName, typeAccount: this.job.typeAccount };
    this.invitation.profile.photo = 'assets/img/noPicture.png';
    this.connexion.addObject<invitation>('register', this.invitation).subscribe(
      regis => {
        localStorage.setItem('userPhone', regis.toString());
        alert('Registro de Usuario Satisfactorio, Verifique su correo electrónico.');
        this.correct = true;
        this._router.navigate(['/sign/login']);
      },
      error => {
        var errorMessage = <any>error;
        this.correct = false;
        switch (errorMessage.status) {
          case 400:
            alert('Usuario ya registrado. \n Por favor intente nuevamente.');
            break;

          default:
            alert('Ocurrió un error al intentar registrar el usuario. \n Por favor verifique los datos e intente nuevamente.');
            break;
        }
      }
    );
  }

  agregarDireccion() {
    let local, paisMini, depaMini, cityMini, zonaMini;
    let objDepartamento: field;
    let objCiudad: field;
    let objZona: field;

    try {
      local = $('#local')[0].value;
      if (!isNullOrUndefined(local)) {
        let separador = local.split(": ", 2);
        paisMini = separador[1];
        depaMini = $('#depaMini')[0].value;
      }
      if (!isNullOrUndefined(depaMini)) {
        let separador = depaMini.split(": ", 2);
        objDepartamento = {
          id: separador[1],
          valor: $('#depaMini')[0].options[separador[0]].text
        }
      }
      cityMini = $('#cityMini')[0].value;
      if (!isNullOrUndefined(cityMini)) {
        let separador = cityMini.split(": ", 2);
        objCiudad = {
          id: separador[1],
          valor: $('#cityMini')[0].options[separador[0]].text
        }
      };

      zonaMini = $('#zonaMini')[0].value;
      if (!isNullOrUndefined(zonaMini)) {
        let separador = zonaMini.split(": ", 2);
        objZona = {
          id: separador[1],
          valor: $('#zonaMini')[0].options[separador[0]].text
        }
      }
      let objAddress: address = {
        country: paisMini,
        state: objDepartamento,
        city: objCiudad,
        zone: objZona,
        geoData: this.invitation.contact.address.geoData,
        especificLocation: this.invitation.contact.address.especificLocation
      };
      this.invitation.contact.address = objAddress;
    } catch (error) {
      console.log('Error', error);
    }
  }

  updateSelectedValue(index) {
    this.listDepa = this.ListLOC.filter(LOC => LOC.owner == index);
  }

  updateSelectDepartamento(index) {
    this.listCiudad = this.ListLOC.filter(LOC => LOC.owner == index);
  }

  updateSelectCiudad(index) {
    this.listZona = this.ListLOC.filter(LOC => LOC.owner == index);
  }

  updateSelectEquipo(index) {
    this.ListRol = this.ListLOC.filter(LOC => LOC.typecon_id == index);
  }
}