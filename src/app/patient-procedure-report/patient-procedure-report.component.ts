import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { ActivatedRoute    } from '@angular/router';

import { PatientService    } from '../services/patient.service'; 
import { LoggedInService   } from '../services/logged-in.service';
import { SessionService    } from '../services/session.service';

import { User              } from '../model/user-model';

@Component({
  selector: 'app-patient-procedure-report',
  templateUrl: './patient-procedure-report.component.html',
  styleUrls: ['./patient-procedure-report.component.css']
})
export class PatientProcedureReportComponent implements OnInit {
  private error: String;
  private theUser: User;
  private isLoggedIn: boolean = false;
  private patientProcedures: Array<String> = [];
  private patientProcedureToDisplay: { 
    procedure: String, numberPatient: Number
   }[];
   private adiposeDerivedCount:Number;
   private boneMarrowCount    :Number;
   private procedurePatientDetail: String;

  constructor(
    private patientService: PatientService,
    private sessionservice: SessionService,
    private loggedIn: LoggedInService,
    private router: Router,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.patientService.getPatientProcedureList()
      .then((patientProcedureList) => {
        this.patientProcedures = patientProcedureList.map((item) => {
          return item.procedure;
        })
        // console.log(this.patientProcedures);
        // Array filters items based on search criteria (query) 
        // then count number of patient with each condition   
        this.adiposeDerivedCount = this.filterProcedures('Adipose Derived Stem Cell').length;
        this.boneMarrowCount     = this.filterProcedures('Bone Marrow').length;
 
        //Array patientProcedureToDisplay saves all data needed to display in html
        this.patientProcedureToDisplay = [
          { 'procedure': 'Adipose Derived Stem Cell', 'numberPatient': this.adiposeDerivedCount },
          { 'procedure': 'Bone Marrow'              , 'numberPatient': this.boneMarrowCount   },
        ]
        // this.patientProcedureToDisplay.forEach(element => {
        //   console.log(`PATIENT PROCEDURE TO DISPLAY => ${ element.procedure } + ${ element.numberPatient }`);
        // });
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

  filterProcedures(query) {
    return this.patientProcedures.filter((el) =>
      el.indexOf(query) > -1
    )
  }

  rowClickedToDetail(index) {
    this.procedurePatientDetail = this.patientProcedureToDisplay[index].procedure;

    if (this.procedurePatientDetail) {
      this.patientService.setReportDetailInfo(this.procedurePatientDetail);
      console.log(this.procedurePatientDetail);
      this.router.navigate(['patients/procedure/detail']);
    }
  }
}
