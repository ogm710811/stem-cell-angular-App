import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { ActivatedRoute    } from '@angular/router';

import { PatientService    } from '../services/patient.service'; 
import { LoggedInService   } from '../services/logged-in.service';
import { SessionService    } from '../services/session.service';

import { User              } from '../model/user-model';
@Component({
  selector: 'app-patient-condition-report',
  templateUrl: './patient-condition-report.component.html',
  styleUrls: ['./patient-condition-report.component.css']
})
export class PatientConditionReportComponent implements OnInit {
  private patients: Array<Object> = [];
  private patientConditions: Array<String> = [];
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
    this.patientService.getPatientConditionList()
      .then((patientConditionList) => {
        this.patientConditions = patientConditionList.map((item) => {
          return item.condition;
        })
        console.log(`PATIENT CONDITION LIST => ${ this.patientConditions }`);
      })
      .catch((err) => {
        const apiError = err.json();
        this.error = apiError.message;
      })

    // get user from the service thru the property theUser.
    this.theUser = this.loggedIn.getUserInfo();
    
    // subscribe the user in the loggedIn service
    this.loggedIn.loggedIn$.subscribe((userFromApi) => {
      this.isLoggedIn = true;
      console.log(`IS_LOGGED_IN ADD PATIENT PAGE => ${ this.isLoggedIn }`);
    });
  }

}
