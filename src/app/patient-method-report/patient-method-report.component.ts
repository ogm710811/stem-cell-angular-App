import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { ActivatedRoute    } from '@angular/router';

import { PatientService    } from '../services/patient.service'; 
import { LoggedInService   } from '../services/logged-in.service';
import { SessionService    } from '../services/session.service';

import { User              } from '../model/user-model';

@Component({
  selector: 'app-patient-method-report',
  templateUrl: './patient-method-report.component.html',
  styleUrls: ['./patient-method-report.component.css']
})
export class PatientMethodReportComponent implements OnInit {
  private error: String;
  private theUser: User;
  private isLoggedIn: boolean = false;
  private patientMethods: Array<String> = [];
  private patientMethodToDisplay: { 
    method: String, code: String, numberPatient: Number
   }[];

   private ivnCount:Number;
   private iarCount  :Number;
   private iacCount  :Number;
   private itcCount  :Number;
   private ilsount  :Number;
   private lftCount :Number;
   private lhdCount :Number;
   private lpnCount :Number;
   private lfcCount :Number;
   private leyCount :Number;  

  constructor(
    private patientService: PatientService,
    private sessionservice: SessionService,
    private loggedIn: LoggedInService,
    private router: Router,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.patientService.getPatientMethodList()
      .then((patientMethodList) => {
        this.patientMethods = patientMethodList.map((item) => {
          return item.deliveryMethod;
        })
        console.log(this.patientMethods);

        // Array filters items based on search criteria (query) 
        // then count number of patient with each condition   
        this.ivnCount = this.filterConditions('ivn').length;
        this.iarCount = this.filterConditions('iar').length;
        this.iacCount = this.filterConditions('iac').length;
        this.itcCount = this.filterConditions('itc').length;
        this.ilsount  = this.filterConditions('ils').length;
        this.lftCount = this.filterConditions('lft').length;
        this.lhdCount = this.filterConditions('lhd').length;
        this.lpnCount = this.filterConditions('lpn').length;
        this.lfcCount = this.filterConditions('lfc').length;
        this.leyCount = this.filterConditions('ley').length;

        // Array patientConditionToDisplay saves all data needed to display in html
        this.patientMethodToDisplay = [
          { 'method': 'Intravenous'           , 'code': 'IVN', 'numberPatient': this.ivnCount },
          { 'method': 'Intra Arterial'        , 'code': 'IAR'  , 'numberPatient': this.iarCount },
          { 'method': 'Intra Articular'       , 'code': 'IAC'  , 'numberPatient': this.iacCount },
          { 'method': 'Intrathecal'           , 'code': 'ITC'  , 'numberPatient': this.itcCount },
          { 'method': 'Intralesional'         , 'code': 'ILS'  , 'numberPatient': this.ilsount  },
          { 'method': 'Localized Fat Transfer', 'code': 'LFT' , 'numberPatient': this.lftCount },
          { 'method': 'Localized Head'        , 'code': 'LHD' , 'numberPatient': this.lhdCount },
          { 'method': 'Localized Penis'       , 'code': 'LPN' , 'numberPatient': this.lpnCount },
          { 'method': 'Localized Facial'      , 'code': 'LFC' , 'numberPatient': this.lfcCount },
          { 'method': 'Localized Eyes'        , 'code': 'LEY' , 'numberPatient': this.leyCount },          
        ]
        // this.patientMethodToDisplay.forEach(element => {
        //   console.log(`PATIENT CONDITION TO DISPLAY => ${ element.method } + ${ element.code } + ${ element.numberPatient }`);
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

  filterConditions(query) {
    return this.patientMethods.filter((el) =>
      el.indexOf(query.toUpperCase()) > -1
    )
  }

}
