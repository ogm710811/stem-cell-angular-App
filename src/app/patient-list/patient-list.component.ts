import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';
import { ActivatedRoute    } from '@angular/router';

import { PatientService    } from '../services/patient.service'; 
import { LoggedInService   } from '../services/logged-in.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  private patients: Array<Object> = [];
  private error: any;
  private userInfo: string;

  constructor( 
    private patientService : PatientService,
    private loggedInService: LoggedInService,
    private router: Router,
    private actRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    
    // GET THE PATIENT LIST
    this.patientService.getPatientList()
      .then((patientList) => {
        this.patients = patientList;
        // console.log('*** THIS IS THE LIST OF PATIENTS ***');
        // console.log(this.patients);
      })
      .catch((error) => {
        this.error = 'There was an error. Please, try again later';
      })

      /*** THIS SERVICE IS NOT WORKING IN THIS COMPONENT ***/
      // this.loggedInService.userInfoSubject.subscribe(
      //   userInfo => {
      //     console.log('*** PATIENT LIST PAGE => USER INFO ***');
      //     console.log(userInfo);
      //     this.user = userInfo;
      //   }
      // );

      /*
        The user info comes from the property 'userInfo'
        created in the service LoggedInService, that
        property gets a value after the user is logged in
        or signed up, during the ngOnDestroy() function.
      */
      this.userInfo = this.loggedInService.userInfo;
      console.log('*** PATIENT LIST PAGE => USER INFO ***');
      console.log(this.userInfo);
  }

  viewDetails(id) {
    this.router.navigate(['patient', id]);
  }
}
