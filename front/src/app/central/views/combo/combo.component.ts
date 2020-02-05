import { Component, OnInit } from '@angular/core';
import { Contexto, Location, TypeContext } from 'src/app/models/schema';
import { ConnexionService } from 'src/app/services/connexion.service';
import { DataSet } from 'src/app/view-model/dataset';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['../../central.component.css', './combo.component.css']
})
export class ComboComponent implements OnInit {

  myData: DataSet<Location>;

  constructor(private conexionService: ConnexionService) {
    this.myData = new DataSet<Location>();
  }

  ListContext: TypeContext[] = [];
  ListCtxVal: TypeContext[] = [];

  ListFamily: Location[] = [];
  ListFamVal: Location[] = [];

  ngOnInit() {
    this.conexionService.get_data<Location>('location').subscribe(res => {
      console.log('location', res);
      this.myData.Data = res;
      this.myData.initData();
    });

    this.conexionService.get_data<TypeContext>('typecontext').subscribe(res => {
      console.log('typecontext', res);
      
      this.ListContext = res;
      this.toSort();
    });

    this.conexionService.get_data<Location>('location').subscribe(res => {
      console.log('location genSort', res);
      this.ListFamily = res;//aqui aumento logica
      this.genSort(this.ListFamily, this.ListFamVal);
    })
  }

  //methods  
  editContext() {
    this.myData.toEdit();
  }

  selectContext(contexto) {
    this.myData.toSelect(contexto as Location);
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

  genSort(xlist: any[], xval: any[]) {
    for (let i = 0; i < xlist.length; i++) {
      let xl = xlist[i];
      if (xl['estado'] == 1) {
        xval.push(xl);
      }
    }
    xlist = xlist.sort((a, b) => {
      if (a['name'] < b['name']) return -1;
      else if (a['name'] > b['name']) return 1;
      else return 0;
    });
  }

  addContext() {
    this.myData.toNew(new Location(undefined, '', '', 0, undefined, 1, undefined, '', undefined));
  }

  cancelContext() {
    this.myData.toCancel();
  }

  saveContext() {
    if (this.myData.mode == 'edit') {
      this.conexionService.editObject<Location>('location', this.myData.xCurrent).subscribe(
        res => {
          this.myData.toSave(res);
        },
        error => {
          var errorMessage = <any>error;
          console.log('xerror:', errorMessage);
        }
      );
    } else {
      this.conexionService.addObject<Location>('location', this.myData.xCurrent).subscribe(
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