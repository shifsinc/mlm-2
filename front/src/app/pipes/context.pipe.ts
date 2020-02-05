import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'context'
})
export class ContextPipe implements PipeTransform {

  transform(key: any, ctxList: any[], fieldShow: string): any {
    let res: string = '-';
    console.log('en pipe = ', key);
    if (key == null || ctxList.length < 1 || fieldShow == null) {
      res = '-';
    } else {
      let item = ctxList.find(s => s._id == key);
      if (item == null) {
        res = '-';
      } else {
        res = item[fieldShow];
      }
    }
    return res;
  }

}
