import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombre'
})
export class NombrePipe implements PipeTransform {

  transform(value: string, args: any): any {
    let resp;
    args.forEach(depa => {
      if (depa._id == value) {
        resp = depa.name;
      }
    });
    return resp;
  }

}
