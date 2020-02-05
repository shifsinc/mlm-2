import { Component, OnInit } from '@angular/core';
import { TypeContext, Contexto } from 'src/app/models/schema';
import { ConnexionService } from 'src/app/services/connexion.service';
import { DataSet } from 'src/app/view-model/dataset';

@Component({
  selector: 'app-type-context',
  templateUrl: './type-context.component.html',
  styleUrls: ['../../central.component.css', './type-context.component.css']
})
export class TypeContextComponent implements OnInit {

  myData: DataSet<TypeContext>;

  constructor(private conexionService: ConnexionService) {
    this.myData = new DataSet<TypeContext>();
  }
  ListContext: Contexto[] = [];
  ListCtxVal: Contexto[] = [];

  ngOnInit() {
    this.conexionService.get_data<TypeContext>('typecontext').subscribe(res => {
      this.myData.Data = res;
      this.myData.initData();
    });

    this.conexionService.get_data<Contexto>('context').subscribe(res => {
      this.ListContext = res;
      this.toSort();
    });
  }

  //methods
  editContext() {
    this.myData.toEdit();
  }

  selectContext(contexto) {
    this.myData.toSelect(contexto as TypeContext);
  }

  toSort() {
    for (let i = 0; i < this.ListContext.length; i++) {
      let ctx = this.ListContext[i];
      if (ctx.estado == 1) {
        this.ListCtxVal.push(ctx);
      }
    }
    this.ListContext = this.ListContext.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    });
  }

  addContext() {
    this.myData.toNew(new TypeContext(undefined, '', '', '', 1, undefined));
  }

  cancelContext() {
    this.myData.toCancel();
  }

  saveContext() {
    if (this.myData.mode == 'edit') {
      this.conexionService.editObject<TypeContext>('typecontext', this.myData.xCurrent).subscribe(
        res => {
          this.myData.toSave(res);
        },
        error => {
          var errorMessage = <any>error;
          console.log('xerror:', errorMessage);
        }
      );

    } else {
      this.conexionService.addObject<TypeContext>('typecontext', this.myData.xCurrent).subscribe(
        res => {
          this.myData.toSave(res);
        },
        error => {
          var errorMessage = <any>error;
          console.log('xerror:', errorMessage);
        }
      );
    }
  }

}
