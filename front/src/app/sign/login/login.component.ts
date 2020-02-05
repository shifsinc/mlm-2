import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';
import { isNullOrUndefined } from 'util';
import { globalConfigurations } from 'src/app/services/globalVars';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: user;

  constructor(private connexion: ConnexionService, private _router: Router) {
    this.user = new user();
  }

  ngOnInit() {
    if (localStorage.getItem('userEmail')) {
      this.user.email = localStorage.getItem('userEmail');
    }
  }

  onSignIn() {
    try {
      this.connexion.get_dataWithParams<user>('login', '?ci=' + this.user.ci + '&password=' + this.user.password).subscribe(
        (userJWT) => {
          if (!isNullOrUndefined(userJWT)) {
            localStorage.clear();
            if (userJWT['userCompany'].length > 0) {
              for (let i = 0; i < userJWT['userCompany'].length; i++) {
                console.log('userJWT[userCompany]userJWT[userCompany]', userJWT['userCompany']);
              }
            }
            for (var propiedad in userJWT) {
              if (userJWT.hasOwnProperty(propiedad)) {
                if ((userJWT['userCompany'].length > 0) && (propiedad == 'userCompany')) {
                  localStorage.setItem(propiedad, JSON.stringify(userJWT[propiedad]));
                } else {
                  localStorage.setItem(propiedad, userJWT[propiedad].toString());
                }
                
                globalConfigurations[propiedad] = userJWT[propiedad];
              }
            }
            this._router.navigate(['/']);
          } else {
            localStorage.clear();
          }
        },
        (error) => {
          let errorMessage = <any>error;
          if (errorMessage.error.message === 'User does not exist') {
            alert('Usuario aún no registrado. \n Por favor intente nuevamente');
            this.user.email = null;
            this.user.password = null;
          }
          if (errorMessage.error.message === 'Password did not match') {
            alert('Contraseña incorrecta. \n Por favor intente nuevamente');
            this.user.email = null;
            this.user.password = null;
          }
        }
      );
    } catch (error) {
      alert('El nombre de usuario o la contraseña son incorrectos. \n Por favor intente nuevamente');
      this.user.email = null;
      this.user.password = null;
    }
  }

}
