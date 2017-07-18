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
  private patient: Array<Object> = [];

  constructor(
    private patientService: PatientService,
    private loggedIn: LoggedInService,
  ) { }

  ngOnInit() {
    // get user from the service thru the property theUser.
    this.theUser = this.loggedIn.getUserInfo();
    if (this.theUser) {
      this.displayInfo();
    }
  }

  searchPatient(phoneNumber){
    this.patientService.searchPatient(phoneNumber)
      .then((onePatient) => {
        this.patient = onePatient;
      })
      .catch((error) => {
        this.error = 'There was an error. Please, try again later';
      })

      // after search patient we clear the form
      // using the ViewChild
      this.searchForm.reset();
  }

  displayInfo() {
    console.log(`USER AT PATIENT SEARCH PAGE => ${ this.theUser.getFullName() }`);
  }

}
