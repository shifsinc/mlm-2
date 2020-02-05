import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { person } from "../../../models/person";
import { job, field, address, Location } from "../../../models/schema";
import { ConnexionService } from 'src/app/services/connexion.service';
import { Router } from '@angular/router';
import { globalVars } from 'src/app/services/globalVars';
import { isNullOrUndefined } from 'util';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  perfil: person;
  public job: job;

  ListLOC: Location[] = [];
  ListLOCMain: Location[] = [];
  listDepa: Location[] = [];
  listCiudad: Location[] = [];
  listZona: Location[] = [];
  depasCI: Location[] = [];

  public path_server = 'userFiles/profile';
  public mostrar = true;
  public title_upload = '';
  public urlImage = 'assets/img/noPicture.png';
  urlGlobal = globalVars.filesDomain;

  selectedFile: File[] = [];
  scaledImage: Blob[] = [];
  thumbImage: Blob[] = [];
  datosImagen: any[] = [];
  porcentajeUpload: string = '0';
  nombreFile: string = '';
  countFiles: number = 0;
  reader: FileReader = new FileReader();
  upload: boolean;

  public muestraUP: string = 'muestra';
  public muestraMIDDLE: string = 'noMuestra';
  public muestraDOWN: string = 'noMuestra';
  lang: string;

  constructor(private connexion: ConnexionService, private _router: Router) {
    this.job = new job();
  }

  ngOnInit() {
    this.connexion.get_data<Location>('location').subscribe(reslo => {
      this.ListLOC = reslo;
      this.ListLOCMain = reslo.filter(LOC => isNullOrUndefined(LOC.owner));
      this.depasCI = this.ListLOC.filter(LOC => LOC.owner == '5e14d611d235a7103c0ba4f6');
    }, error => {
      console.log('Hubo un problema al cargar datos. ' + error);
    });
    let codigo = localStorage.getItem('code').substr(1);
    if (codigo) {
      this.connexion.get_dataId<person>('person', codigo).subscribe(myUser => {
        this.perfil = myUser;
        this.urlImage = myUser.profile.photo.toString();
      this.listDepa = this.ListLOC.filter(LOC => LOC.owner == myUser.contact.address.country);
      this.listCiudad = this.ListLOC.filter(LOC => LOC.owner == myUser.contact.address.state.id);
      this.listZona = this.ListLOC.filter(LOC => LOC.owner == myUser.contact.address.city.id);
      });
    }
  }
  
  recibeDeHijo(event: any) {
    this.perfil.profile.photo = event.upload.url;
    this.urlImage = event.upload.url;
  }

  onUpdate() {
    this.connexion.editObject<person>('person', this.perfil).subscribe(
      regis => {
        localStorage.setItem('code', regis['estado'].toString() + regis['_id'].toString());
        alert('Actualización de Usuario Satisfactorio.');
        this._router.navigate(['/']);
      },
      error => {
        var errorMessage = <any>error;
        switch (errorMessage.status) {
          case 400:
            console.log('Usuario ya registrado. \n Por favor intente nuevamente.');
            break;

          default:
          console.log('Ocurrió un error al intentar actualizar el usuario. \n Por favor verifique los datos e intente nuevamente.');
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
        geoData: this.perfil.contact.address.geoData,
        especificLocation: this.perfil.contact.address.especificLocation
      };
      this.perfil.contact.address = objAddress;
    } catch (error) {
      console.log('Error', error);
    }
  }
  editSeller(direccion: address) {
    this.listDepa = this.ListLOC.filter(LOC => LOC.owner == direccion.country);
    this.listCiudad = this.ListLOC.filter(LOC => LOC.owner == direccion.state.id);
    this.listZona = this.ListLOC.filter(LOC => LOC.owner == direccion.city.id);
  }
  // Method in component class
  updateSelectedValue(index) {
    this.listDepa = this.ListLOC.filter(LOC => LOC.owner == index);
  }

  updateSelectDepartamento(index) {
    this.listCiudad = this.ListLOC.filter(LOC => LOC.owner == index);
  }

  updateSelectCiudad(index) {
    this.listZona = this.ListLOC.filter(LOC => LOC.owner == index);
  }

}
