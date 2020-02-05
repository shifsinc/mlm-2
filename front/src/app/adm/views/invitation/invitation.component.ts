import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { invitation } from "src/app/models/invitation";
import { job, address, field, Location, contact, profile } from 'src/app/models/schema';
import { ToastService } from 'src/app/services/toast.service';
import { person } from 'src/app/models/person';
import { isNullOrUndefined } from 'util';
import { TypeContext } from 'src/app/models/contextclases';

declare var $: any;

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {

  invitation: invitation;
  public job: job;
  correct: boolean = false;

  ListCompany: TypeContext[] = [];
  ListRol: Location[] = [];
  isSaved: boolean = false;

  contact: contact;
  profile: profile;
  address: address;
  field: field;
  ListLOC: Location[] = [];
  ListLOCMain: Location[] = [];
  listDepa: Location[] = [];
  depasCI: Location[] = [];
  listCiudad: Location[] = [];
  listZona: Location[] = [];

  constructor(private connexion: ConnexionService, private _router: Router, private route: ActivatedRoute, public toastService: ToastService) {
    this.invitation = new invitation();
    this.job = new job();
    this.contact = new contact();
    this.profile = new profile();
    this.address = new address();
    this.field = new field();
    this.isSaved = false;
  }

  ngOnInit() {
    if (localStorage.getItem('code').substring(0, 1) == '0') {
      alert('Su cuenta no está activada.\nPor favor active su cuenta antes de invitar a una persona.');
      this._router.navigate(['/profile']);
    }

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
    this.address.city = this.field;
    this.address.state = this.field;
    this.address.zone = this.field;

    if (this.route.snapshot.params['_id']) {
      this.connexion.get_dataId<invitation>('invitationQuick', this.route.snapshot.params['_id']).subscribe(resp => {
        this.invitation = resp;
      this.agregarDireccion();
      });
    }



  }

  verificarUsuario() {
    /*if (this.invitation.ci) {
      this.connexion.get_dataWithParamsOne<person>('personInvitation', '?ci=' + this.invitation.ci).subscribe(myUser => {
        this.invitado = myUser;
        console.log(myUser);
        
        this.invitation.nombre = this.invitado.profile.firstName;
        this.invitation.apellidoP = this.invitado.profile.lastNameP;
        this.invitation.apellidoM = this.invitado.profile.lastNameM;
      });

    } else {
      this.error('CI vacío', 'MLM Invitación');
    }*/

  }

  error(message: string, title: string) {
    this.toastService.error(message, title);
  }

  onRegister() {
    /*if (this.invitado) {
      for (let i = 0; i < this.invitado.associated.length; i++) {
        const element = this.invitado.associated[i];
        if ((element.companyName == this.job.companyName) && (element.typeAccount == this.job.typeAccount)) {
          this.error('Esta persona ya cuenta con una invitación.', 'MLM Invitación');
          return 0;
        }
      }
    }*/
    this.agregarDireccion();
    this.invitation.estado = 1;
    this.invitation.job = { ciMain: localStorage.getItem('code').substr(1), companyName: this.job.companyName, typeAccount: this.job.typeAccount };
    let fechaHora = new Date();
    this.invitation.date = fechaHora;
    let pass = this.generarCodigo();
    this.invitation.codeInvitation = pass;
    this.invitation.password = pass;
    this.invitation.profile.photo = 'assets/img/noPicture.png';

    this.connexion.addObject<invitation>('invitation', this.invitation).subscribe(
      regis => {
        alert('La invitación fue realizada de manera correcta');
        console.log('regis', regis);

        this.correct = true;
        this._router.navigate(['/']);
      },
      error => {
        var errorMessage = <any>error;
        this.correct = false;
        switch (errorMessage.status) {
          case 400:
            alert('El usuario ya fue invitado. \n Por favor intente nuevamente.');
            break;

          default:
            alert('Ocurrió un error al intentar invitar el usuario. \n Por favor verifique los datos e intente nuevamente.');
            break;
        }
      }
    );
    this.isSaved = true;
  }

  generarCodigo() {
    return 'ABC123';
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
