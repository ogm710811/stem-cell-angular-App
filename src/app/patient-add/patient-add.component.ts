import { Component, OnInit } from '@angular/core';
import { ViewChild         } from '@angular/core';

import { PatientService    } from '../services/patient.service'; 
import { LoggedInService   } from '../services/logged-in.service';
import { NgForm             } from '@angular/forms';

import { User              } from '../model/user-model';
@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {
  // using ViewChild allows to reset the form ones the
  // user click the submit button
  @ViewChild('searchForm') searchForm: NgForm;

  display: String;
  class: String;

  private error: String;
  private theUser: User;
  private patient: Array<Object>;

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

  setDisplay() {
      this.display = "block";

      if (this.class = "expanded") {
        this.class = "";
      } else {
        this.class = "expanded";
      }
  }

  displayInfo() {
    console.log(`USER AT ADD PATIENT PAGE => ${ this.theUser.getFullName() }`);
  }
}
