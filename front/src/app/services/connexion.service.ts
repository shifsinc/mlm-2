import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { globalVars, globalRoutes } from './globalVars';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ConnexionService {

  headersWithAuth;
  headersWithOutAuth;

  url_base: string;
  public unvalor: string = '';

  constructor(private http: HttpClient) {
    this.url_base = globalVars.domain + "/";
    let headAuth = this.generarAutorizacion('with');
    this.headersWithAuth = headAuth;
  }

  generarAutorizacion(auth: string) {
    let head;
    if (localStorage.getItem("token")=='') {
      auth = 'without';
      console.log('Usuario sin permisos');
    }
    switch (auth) {
      case 'with':
        head = new HttpHeaders(
          {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        );
        break;
      case 'without':
        head = new HttpHeaders(
          {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        );
        break;
      default:
        head = new HttpHeaders(
          {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        );
        break;
    }
    return head;
  }

  get_data<T>(ruta: string): Observable<T[]> {
    let subRuta = globalRoutes[ruta];
    //console.log(this.url_base + subRuta);

    return this.http.get<T[]>(this.url_base + subRuta, { headers: this.generarAutorizacion('with') }).pipe(
      map(response => response)
    );
  }

  get_dataWithParams<T>(ruta: string, params: string): Observable<T[]> {
    let subRuta = globalRoutes[ruta];
    return this.http.get<T[]>(this.url_base + subRuta + params, { headers: this.generarAutorizacion('without') }).pipe(
      map(response => response)
    );
  }

  get_dataWithParamsOne<T>(ruta: string, params: string) {
    let subRuta = globalRoutes[ruta];
    //console.log(this.url_base + subRuta + params, this.generarAutorizacion('with'));
    return this.http.get<T>(this.url_base + subRuta + params, { headers: this.generarAutorizacion('without') }).pipe(
      map(response => response)
    );
  }

  get_dataWithParamsNoAuth<T>(ruta: string, params: string): Observable<T[]> {
    let subRuta = globalRoutes[ruta];
    //onsole.log(this.url_base + subRuta + params, this.generarAutorizacion('with'));
    return this.http.get<T[]>(this.url_base + subRuta + params, { headers: this.generarAutorizacion('without') }).pipe(
      map(response => response)
    );
  }

  get_dataId<T>(ruta: string, id: string) {
    let subruta = globalRoutes[ruta];
    return this.http.get<T>(this.url_base + subruta + "/" + id, { headers: this.generarAutorizacion('without') }).pipe(
      map(res => res)
    );
  }

  addObject<T>(ruta: string, xobject: T) {
    let subruta = globalRoutes[ruta];
    return this.http.post<T>(this.url_base + subruta + "/", xobject, { headers: this.generarAutorizacion('without') }).pipe(
      map(res => res)
    );
  }

  editObject<T>(ruta: string, xobject: T) {
    let subruta = globalRoutes[ruta];
    let xid = xobject['_id'];
    return this.http.put<T>(this.url_base + subruta + "/" + xid + "/", xobject, { headers: this.generarAutorizacion('without') }).pipe(
      map(res => res)
    );
  }

  delObject<T>(ruta: string, id: string) {
    let subruta = globalRoutes[ruta];
    return this.http.delete<T>(this.url_base + subruta + "/" + id, { headers: this.generarAutorizacion('with') }).pipe(
      map(res => res)
    );
  }

  verifyUser(ruta: string) {
    let subruta = globalRoutes[ruta];
    //console.log(this.url_base + subruta);
    return this.http.post(this.url_base + subruta, { headers: this.generarAutorizacion('with') }).pipe(
      map(res => {
        //console.log('resresresresresresresresresresresresresresres', res);
      })
    );
  }
}