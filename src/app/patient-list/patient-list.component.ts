import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';

import { PatientService    } from '../services/patient.service'; 
import { LoggedInService    } from '../services/logged-in.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  private patients: Array<Object> = [];
  private error: any;
  private user: any;

  constructor( 
    private patientService : PatientService,
    private loggedInService: LoggedInService,
    private router: Router,
  ) { }

  ngOnInit() {
    
    this.patientService.getPatientList()
      .then((patientList) => {
        this.patients = patientList;
        console.log('*** THIS IS THE LIST OF PATIENTS ***');
        console.log(this.patients);
      })
      .catch((error) => {
        this.error = 'There was an error. Please, try again later';
      })

      this.loggedInService.userInfoSubject.subscribe(
        userInfo => {
          console.log('*** PATIENT LIST PAGE => USER INFO ***');
          console.log(userInfo);
          this.user = userInfo;
        }
      );
  }

  viewDetails(id) {
    this.router.navigate(['patient', id]);
  }
}
