import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expedido'
})
export class ExpedidoPipe implements PipeTransform {

  transform(value: string, args: any): any {
    let resp;
    args.forEach(depa => {
      if (depa._id == value) {
        resp = depa.acronym;
      }
    });
    return resp;
  }

}
