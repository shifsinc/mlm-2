import { Component, OnInit } from '@angular/core';
import { ConnexionService } from 'src/app/services/connexion.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
import { invitation } from 'src/app/models/invitation';

@Component({
  selector: 'app-invitation-list',
  templateUrl: './invitation-list.component.html',
  styleUrls: ['./invitation-list.component.css']
})
export class InvitationListComponent implements OnInit {

  entries: number = 10;
  status: number = 1;
  isLoading: boolean = true;
  temp = [];
  rows;
  activeRow: any;

  constructor(private cnx: ConnexionService, private router: Router, public toastService: ToastService) { }

  ngOnInit() {
    this.obtenerDatos(this.status);
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }

  statusChange($event) {
    this.status = $event.target.value;
    this.obtenerDatos(this.status);
  }

  obtenerDatos(state: number) {
    this.isLoading = true;
    let myCompanyName = JSON.parse(localStorage.getItem('userCompany'));
    this.cnx.get_dataWithParams<invitation>('invitation', '?estado=' + state + '&ciMain=' + localStorage.getItem('code').substr(1) + '&companyName=' + myCompanyName[0].companyName).subscribe(myAds => {
      this.rows = myAds;
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
      this.temp = myAds.map((prop, key) => {
        return {
          ...prop,
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

  editFunction($event) {
    $event.preventDefault();
    this.router.navigate(['/invitacion/' + this.activeRow._id]);
  }

  refreshFunction(event) {
    event.preventDefault();
    this.obtenerDatos(this.status);
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
}
