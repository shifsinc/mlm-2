import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { person } from 'src/app/models/person';

@Component({
  selector: 'app-descendencia-list',
  templateUrl: './descendencia-list.component.html',
  styleUrls: ['./descendencia-list.component.css']
})
export class DescendenciaListComponent implements OnInit {

  entries: number = 10;
  status: number = 1;
  isLoading: boolean = true;
  temp = [];
  rows;
  myID: string;
  activeRow: any;

  constructor(private cnx: ConnexionService, private ruta: ActivatedRoute, private router: Router, public toastService: ToastService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.myID = localStorage.getItem('code').substr(1);
    this.obtenerDatos(1, this.myID);
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }

  statusChange($event) {
    this.status = $event.target.value;
    this.obtenerDatos(this.status, this.myID);
  }

  obtenerDatos(state: number, id: string) {
    this.isLoading = true;
    let myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
    this.cnx.get_dataWithParams<person>('personAssociated', '?userID=' + id + '&companyName=' + myCompanyName[0].companyName + '&estado=' + state).subscribe(myAds => {
      this.rows = myAds[0].associated;
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
      this.temp = myAds[0].associated.map((prop, key) => {
        return {
          ...prop,
          treeStatus: 'collapsed',
          parentId: null,
          id: key
        };
      });
    });
    this.isLoading = false;
  }

  filterTable($event) {
    let val = $event.target.value.toString().toLowerCase();
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key]) {
          try {
            if (d[key].toString().toLowerCase().indexOf(val) !== -1) {
              return true;
            }
          } catch (error) {
            console.log(d[key], error);
          }
        }
      }
      return false;
    });
  }

  refreshFunction(event) {
    event.preventDefault();
    this.obtenerDatos(this.status, this.myID);
  }

  exportFunction(event) {
    event.preventDefault();
    this.error('Espacio Insuficiente en el Disco', 'MLM Export');

  }

  success(message: string, title: string) {
    this.toastService.success(message, title);
  }

  error(message: string, title: string) {
    this.toastService.error(message, title);
  }

  onActivate(event) {
    this.activeRow = event.row;
  }

  onTreeAction(event: any) {
    const index = event.rowIndex;
    const row = event.row;
    if (row.treeStatus === 'collapsed') {
      row.treeStatus = 'loading';

      let myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
      this.cnx.get_dataWithParams<person>('personAssociated', '?userID=' + row._id + '&companyName=' + myCompanyName[0].companyName + '&estado=' + row.estado).subscribe(myTreeAssoc => {
        console.log('myAdsmyAds', myTreeAssoc);

        //this.rows = myTreeAssoc[0].associated;
        let data = myTreeAssoc[0].associated.map((prop, key) => {
          return {
            ...prop,
            treeStatus: 'collapsed',
            parentId: row.id,
            id: key
          };
        });
        this.temp = [...this.temp, ...data]
      });
      row.treeStatus = 'expanded';
      this.cd.detectChanges();
    } else {
      row.treeStatus = 'collapsed';
      this.rows = [...this.rows];
      this.cd.detectChanges();
    }
  }
}
