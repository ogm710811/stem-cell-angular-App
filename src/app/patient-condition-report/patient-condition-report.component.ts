import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { ActivatedRoute    } from '@angular/router';

import { PatientService    } from '../services/patient.service'; 
import { LoggedInService   } from '../services/logged-in.service';
import { SessionService    } from '../services/session.service';

import { User              } from '../model/user-model';
import { Condition         } from '../model/patient-condition-model';
@Component({
  selector: 'app-patient-condition-report',
  templateUrl: './patient-condition-report.component.html',
  styleUrls: ['./patient-condition-report.component.css']
})
export class PatientConditionReportComponent implements OnInit {
  private error: String;
  private theUser: User;
  private isLoggedIn: boolean = false;
  private patientConditions: Array<String> = [];
  private patientConditionToDisplay: { 
    condition: String, code: String, numberPatient: Number
   }[];
   private copdCount:Number;
   private edCount  :Number;
   private ocCount  :Number;
   private eyCount  :Number;
   private aiCount  :Number;
   private dt2Count :Number;
   private sciCount :Number;
   private tbiCount :Number; 
   private conditionPatientDetail: String;

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
        
        // Array filters items based on search criteria (query) 
        // then count number of patient with each condition   
        this.copdCount = this.filterConditions('copd').length;
        this.edCount   = this.filterConditions('ed'  ).length;
        this.ocCount   = this.filterConditions('oc'  ).length;
        this.eyCount   = this.filterConditions('ey'  ).length;
        this.aiCount   = this.filterConditions('ai'  ).length;
        this.dt2Count  = this.filterConditions('dt2' ).length;
        this.sciCount  = this.filterConditions('sci' ).length;
        this.tbiCount  = this.filterConditions('tbi' ).length;

        // Array patientConditionToDisplay saves all data needed to display in html
        this.patientConditionToDisplay = [
          { 'condition': 'CHRONIC OBSTRUCTIVE PULMONARY DISEASE', 'code': 'COPD', 'numberPatient': this.copdCount },
          { 'condition': 'ERECTILE DYSFUNCTION'                 , 'code': 'ED'  , 'numberPatient': this.edCount   },
          { 'condition': 'ORTHOPEDIC CONDITION'                 , 'code': 'OC'  , 'numberPatient': this.ocCount   },
          { 'condition': 'EYES'                                 , 'code': 'EY'  , 'numberPatient': this.eyCount   },
          { 'condition': 'AUTO INMUNE'                          , 'code': 'AI'  , 'numberPatient': this.aiCount   },
          { 'condition': 'DIABETES TYPE 2'                      , 'code': 'DT2' , 'numberPatient': this.dt2Count  },
          { 'condition': 'SPINAL CORD INJURY'                   , 'code': 'SCI' , 'numberPatient': this.sciCount  },
          { 'condition': 'TRAUMATIC BRAIN INJURY'               , 'code': 'TBI' , 'numberPatient': this.tbiCount  },          
        ]
        // this.patientConditionToDisplay.forEach(element => {
        //   console.log(`PATIENT CONDITION TO DISPLAY => ${ element.condition } + ${ element.code } + ${ element.numberPatient }`);
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
      console.log(`IS_LOGGED_IN AT PATIENT REPORT CONDITION PAGE => ${ this.isLoggedIn }`);
    });
  }

filterConditions(query) {
    return this.patientConditions.filter((el) =>
      el.indexOf(query.toUpperCase()) > -1
    )
  }

  // navigate to detail page and also this function
  // have to pass to the destination component which
  // condition was clicked 
  // use index to define which condition sent to the observable
  // at patient service
  // viewDetails(index) {
  //   this.conditionPatientDetail = this.patientConditionToDisplay[index].code;
    
  //   if (this.conditionPatientDetail) {
  //     console.log(this.conditionPatientDetail);
  //     this.patientService.detailClicked(this.conditionPatientDetail);
  //     this.router.navigate(['patients/condition/detail']); 
  //   }
  // }

  //**** => FOR SOME REASON USING PROPERTIES IN A SERVICE AND SETTER AND GETTER
  //        LOOKS MORE STABLE THAN USING OBSERVABLES
  // same as before but using the property reportDetailInfo from the service
  rowClickedToDetail(index) {
    this.conditionPatientDetail = this.patientConditionToDisplay[index].code;

    if (this.conditionPatientDetail) {
      this.patientService.setReportDetailInfo(this.conditionPatientDetail);
      //console.log(this.conditionPatientDetail);
      this.router.navigate(['patients/condition/detail']);
    }
  }
}

