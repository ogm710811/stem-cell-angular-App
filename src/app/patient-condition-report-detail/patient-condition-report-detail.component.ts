import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { ActivatedRoute    } from '@angular/router';

import { PatientService    } from '../services/patient.service'; 
import { LoggedInService   } from '../services/logged-in.service';
import { SessionService    } from '../services/session.service';

import { User              } from '../model/user-model';
@Component({
  selector: 'app-patient-condition-report-detail',
  templateUrl: './patient-condition-report-detail.component.html',
  styleUrls: ['./patient-condition-report-detail.component.css']
})
export class PatientConditionReportDetailComponent implements OnInit {
  private error: String;
  private theUser: User;
  private isLoggedIn: boolean = false;
  private patients: Array<Object> = [];
  private condition: String;

  constructor(
    private patientService: PatientService,
    private sessionservice: SessionService,
    private loggedIn: LoggedInService,
    private router: Router,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    // get row clicked in condition report using observable
    // this.patientService.reportDetails$.subscribe((condition) => {
    //   this.condition = condition;
    //   console.log(`CONDITION AT REPORT CONDITION DETAIL PAGE => ${ this.condition }`);

    //   this.patientService.searchDetailPatientCondition(this.condition)
    //     .then((patientConditionDetailList) => {
    //       this.patients = patientConditionDetailList;
    //       console.log(`PATIENT CONDITION DETAIL LIST => ${ this.patients }`)
    //     })
    //     .catch((err) => {
    //       const apiError = err.json();
    //       this.error = apiError.message;
    //     })
    // });

    // get row clicked in condition report using property
    this.condition = this.patientService.getReportDetailInfo()
    //console.log(`CONDITION AT REPORT CONDITION DETAIL PAGE => ${ this.condition }`);
    this.patientService.searchDetailPatientCondition(this.condition)
        .then((patientConditionDetailList) => {
          this.patients = patientConditionDetailList;
          //console.log(`PATIENT CONDITION DETAIL LIST => ${ this.patients }`)
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
      //console.log(`IS_LOGGED_IN PATIENT REPORT CONDITION DETAIL PAGE => ${ this.isLoggedIn }`);
    });

    }
}
