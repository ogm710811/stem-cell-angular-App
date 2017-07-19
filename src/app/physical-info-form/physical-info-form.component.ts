import { Component, OnInit } from '@angular/core';
import { ViewChild         } from '@angular/core';

import { PatientService    } from '../services/patient.service'; 
import { LoggedInService   } from '../services/logged-in.service';
import { NgForm             } from '@angular/forms';

import { User              } from '../model/user-model';

@Component({
  selector: 'app-physical-info-form',
  templateUrl: './physical-info-form.component.html',
  styleUrls: ['./physical-info-form.component.css']
})
export class PhysicalInfoFormComponent implements OnInit {
  // using ViewChild allows to reset the form ones the
  // user click the submit button
  @ViewChild('physicalInfoForm') physicalInfoForm: NgForm;

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

  displayInfo() {
    console.log(`USER AT PHYSICAL INFO COMPONENT => ${ this.theUser.getFullName() }`);
  }
}