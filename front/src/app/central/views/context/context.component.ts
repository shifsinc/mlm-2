import { Component, OnInit } from '@angular/core';
import { Contexto } from 'src/app/models/schema';
import { DataSet } from 'src/app/view-model/dataset';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['../../central.component.css', './context.component.css']
})
export class ContextComponent implements OnInit {

  myData: DataSet<Contexto>;

  constructor(private conexionService: ConnexionService) {
    this.myData = new DataSet<Contexto>();
  }

  ListContext: Contexto[] = [];

  ngOnInit() {
    this.conexionService.get_data<Contexto>('contextact').subscribe(res => {
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
    this.myData.toSelect(contexto as Contexto);
  }

  toSort() {
    this.ListContext = this.ListContext.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    });
  }
  addContext() {
    this.myData.toNew(new Contexto(undefined, '', '', '', 1, undefined));
  }

  cancelContext() {
    this.myData.toCancel();
  }

  saveContext() {
    if (this.myData.mode == 'edit') {
      this.conexionService.editObject<Contexto>('context', this.myData.xCurrent).subscribe(
        res => {
          this.myData.toSave(res);
        },
        error => {
          var errorMessage = <any>error;
          console.log('xerror:', errorMessage);
        }
      );

    } else {
      this.conexionService.addObject<Contexto>('context', this.myData.xCurrent).subscribe(
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
