import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent implements OnInit {

  private static readonly errorMessages = {
    'required': () => 'Este campo es requerido.',
    'minlength': (params) => 'La cantidad mínima de caracteres es de ' + params.requiredLength + '.',
    'maxlength': (params) => 'La cantidad máxima de caracteres es de ' + params.requiredLength + '.',
    'pattern': (params) => 'The required pattern is: '+ 'mail@ejemplo.com', //params.requiredPattern,
    'email': () => 'El formato de correo es: mail@ejemplo.com',
    'years': (params) => params.message,
    'countryCity': (params) => params.message,
    'crisCode': (params) => params.message,
    'telephoneNumbers': (params) => params.message,
    'telephoneNumber': (params) => params.message
  };

  constructor() { }

  ngOnInit() {
  }

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    //console.log('esto mandamos al directiva show erros:', this.control);
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }

}
