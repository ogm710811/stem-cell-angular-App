import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { ActivatedRoute    } from '@angular/router';

import { PatientService    } from '../services/patient.service'; 
import { LoggedInService   } from '../services/logged-in.service';
import { SessionService    } from '../services/session.service';

import { User              } from '../model/user-model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  private patients: Array<Object> = [];
  private error: String;
  private theUser: User;
  private isLoggedIn: boolean = false;

  constructor( 
    private patientService: PatientService,
    private sessionservice: SessionService,
    private loggedIn: LoggedInService,
    private router: Router,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    // get patient list
    this.patientService.getPatientList()
      .then((patientList) => {
        this.patients = patientList;
      })
      .catch((error) => {
        this.error = 'There was an error. Please, try again later';
      })

    // get user from the service thru the property theUser.
    this.theUser = this.loggedIn.getUserInfo();
    this.displayInfo();
  }

  viewDetails(id) {
    this.router.navigate(['patient', id]);
  }

  displayInfo() {
    console.log(`USER AT PATIENT LIST PAGE => ${ this.theUser.getFullName() }`);
  }
}
