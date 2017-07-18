import { Component, OnInit } from '@angular/core';
import { ActivatedRoute    } from '@angular/router';

import { LoggedInService   } from '../services/logged-in.service'
import { PatientService    } from '../services/patient.service'; 

import { User              } from '../model/user-model';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  private patientId;
  private patient: Array<Object> = [];
  private error: String;
  private theUser: User;
  private conditions: Object = {
    'COPD' : 'CHRONIC OBSTRUCTIVE PULMONARY DISEASE',
    'ED'   : 'ERECTILE DYSFUNCTION',
    'OC'   : 'ORTHOPEDIC CONDITION',
    'EY'   : 'EYES',
    'AI'   : 'AUTO INMUNE',
    'DT2'  : 'DIABETES TYPE 2',
    'SCI'  : 'SPINAL CORD INJURY',
    'TBI'  : 'TRAUMATIC BRAIN INJURY'
  };
  private patientCondition: string = '';
  private deliveryMethods: Object = {
    'IVN' : 'Intravenous',
    'IAR' : 'Intra Arterial',
    'IAC' : 'Intra Articular',
    'ITC' : 'Intrathecal',
    'ILS' : 'Intralesional',
    'LFT' : 'Localized Fat Transfer',
    'LHD' : 'Localized Head',
    'LPN' : 'Localized Penis',
    'LFC' : 'Localized Facial',
    'LEY' : 'Localized Eyes',
  }
  private deliveryMethod: string = '';

  constructor( 
    private route : ActivatedRoute,
    private loggedIn : LoggedInService,
    private patientService : PatientService,
  ) { }

  ngOnInit() {
    // get the patient Id from the url comming from patient list
    // in params :id
    this.route.params
      .subscribe((params) => {
        this.patientId = (params['id']);
      })
    
    // get user from the service thru the property theUser.
    this.theUser = this.loggedIn.getUserInfo();
    if (this.theUser) {
      this.displayInfo();
    }

    // GET THE PATIENT DETAILS
    this.patientService.getOnePatient(this.patientId)
      .then((onePatient) => {
        this.patient = onePatient;
        this.getPatientCondition(this.patient);
        this.getDeliveryMethod(this.patient);
      })
      .catch((error) => {
        this.error = 'There was an error. Please, try again later';
      })
  }

    // Parse Patient Condition Code into Condition Name
  getPatientCondition(any) {
    for ( var key in this.conditions ) {
      if (key = this.patient['condition']) {
        this.patientCondition = this.conditions[key];
      }
      else {
        this.patientCondition = '';
      }      
    }
  }
  
  // Parse Delivery Method Code into Condition Name
  getDeliveryMethod(any) {
    for ( var key in this.deliveryMethods ) {
      if (key = this.patient['deliveryMethod']) {
        this.deliveryMethod = this.deliveryMethods[key];
      }
      else {
        this.deliveryMethod = '';
      }      
    }
  }

  displayInfo() {
    console.log(`USER AT PATIENT DETAILS PAGE => ${ this.theUser.getFullName() }`);
  }
} // ends class
