import { Component, OnInit } from '@angular/core';
import { jjob } from 'src/app/models/job';
import { ConnexionService } from 'src/app/services/connexion.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { job } from 'src/app/models/schema';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

  constructor(private cox: ConnexionService) { }

  jjob: jjob;
  job: job;

  ngOnInit() {
    this.jjob = new jjob();
    this.job = new job();
    this.job.ciMain = 'A';
    this.job.companyName = 'B';
    this.job.typeAccount = 'C';
  }

  guardar() {
    console.log('ESTO ES JOB',this.job);
    this.jjob.job = this.job;
    this.cox.addObject<jjob>('job', this.jjob).subscribe(
      res =>{ 
        console.log(res);
      }
    );
  }

}
