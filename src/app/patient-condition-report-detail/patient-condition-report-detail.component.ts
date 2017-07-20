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
  private indexClicked: number;
  private conditions: Array<string> = ['COPD', 'ED', 'OC', 'EY', 'AI', 'DT2', 'SCI', 'TBI'];
  private conditionClicked: string;
  private patientWithConditions: Array<Object> = [];

  constructor(
    private patientService: PatientService,
    private sessionservice: SessionService,
    private loggedIn: LoggedInService,
    private router: Router,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {

    // get index of row clicked in condition report
    this.patientService.reportDetails$.subscribe((indexClicked) => {
      this.conditionClicked = this.conditions[indexClicked];;  
      console.log(String(this.conditionClicked));
    });

    // get patient with a given condition
    this.patientService.getPatientWithCondition('COPD')
    .then((patientWithCondition) => {
      this.patientWithConditions = patientWithCondition;
      console.log(this.conditionClicked);
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
