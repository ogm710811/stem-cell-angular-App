import { Component, OnInit } from '@angular/core';
import { ViewChild         } from '@angular/core';
import { NgForm             } from '@angular/forms';

import { PatientService    } from '../services/patient.service'; 
import { LoggedInService   } from '../services/logged-in.service';

import { User              } from '../model/user-model';
import { Patient           } from '../model/patient-model';
@Component({
  selector: 'app-patient-info-form',
  templateUrl: './patient-info-form.component.html',
  styleUrls: ['./patient-info-form.component.css']
})
export class PatientInfoFormComponent implements OnInit {
  // using ViewChild allows to reset the form ones the
  // user click the submit button
  @ViewChild('patientInfoForm') patientInfoForm: NgForm;

  private error: String;
  private theUser: User;
  private patient: Object;
  private message: String;
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

  createNewPatient(patientInfoForm) {
    this.patient = {
      pictureAddress: '',
      firstName: patientInfoForm.value.firstname,
      lastName:  patientInfoForm.value.lastname,
      birthDate: patientInfoForm.value.birthDate,
      street:    patientInfoForm.value.street,
      city:      patientInfoForm.value.city,
      state:     patientInfoForm.value.state,
      zip:       patientInfoForm.value.zip,
      email:     patientInfoForm.value.email,
      phoneNumber:  patientInfoForm.value.phone,
      condition: 'EY',
      procedure: 'Bone Marrow',
      deliveryMethod: 'ITC',
      followUp: ''
    }

    console.log(this.patient);
    // after pass the user info we clear the form
    // using the ViewChild
    this.patientInfoForm.reset();

    this.patientService.addNewPatient(this.patient)
      .then((messaje) => {
        this.message = messaje;
        console.log(this.message);
        this.patient = {};
      })
      .catch((err) => {
        const apiError = err.json();
        this.error = apiError.message;
      })
  }
 

  
}
