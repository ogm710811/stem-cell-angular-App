import { Component, OnInit } from '@angular/core';
import { ViewChild         } from '@angular/core';

import { PatientService    } from '../services/patient.service'; 
import { LoggedInService   } from '../services/logged-in.service';
import { NgForm             } from '@angular/forms';

import { User              } from '../model/user-model';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {
  // using ViewChild allows to reset the form ones the
  // user click the submit button
  @ViewChild('searchForm') searchForm: NgForm;

  private error: String;
  private theUser: User;
  private patient: Array<Object>;
  private isLoggedIn: boolean = false;

  constructor(
    private patientService: PatientService,
    private loggedIn: LoggedInService,
  ) { }

  ngOnInit() {
    // get user from the service thru the property theUser.
    this.theUser = this.loggedIn.getUserInfo();
    
    // subscribe the user in the loggedIn service
    this.loggedIn.loggedIn$.subscribe((userFromApi) => {
      this.isLoggedIn = true;
      console.log(`IS_LOGGED_IN ADD PATIENT PAGE => ${ this.isLoggedIn }`);
    });
  }

  searchPatient(phoneNumber){
    this.patientService.searchPatient(phoneNumber)
      .then((onePatient) => {
        this.patient = onePatient;
      })
      .catch((err) => {
        const apiError = err.json();
        this.error = apiError.message;
      })

      // after search patient we clear the form
      // using the ViewChild
      this.searchForm.reset();
  }

}
