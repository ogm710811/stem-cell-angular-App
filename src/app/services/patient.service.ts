import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions       } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatientService {
  private patientUrl: string = 'http://localhost:3000/api.stem'
  private patientParams: string;

  constructor( private http: Http ) { }

  getPatientList() {
    this.patientParams = '/patients'
    return this.http.get( this.patientUrl + this.patientParams,
                          { withCredentials: true }
                        )
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
  
  getOnePatient(id) {
    this.patientParams = `/patients/${ id }`
    return this.http.get( this.patientUrl + this.patientParams,
                          { withCredentials: true }
                        )
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  searchPatient(phoneNumber) {
    this.patientParams = `/patients/search?phoneNumber=${ phoneNumber }`;
    return this.http.get( this.patientUrl + this.patientParams,
                        { withCredentials: true }
                        )
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

  addNewPatient(patient) {
    this.patientParams = `/patients`;
    console.log(`PATIENT AT SERVICE => ${ patient.firstName } ${ patient.lastName } `);
    return this.http.post( this.patientUrl + this.patientParams,
                          patient,
                        { withCredentials: true }
                        )
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

  getPatientConditionList() {
    this.patientParams = `/conditions`;
    return this.http.get( this.patientUrl + this.patientParams,
                        { withCredentials: true }
                        )
    .toPromise()
    .then(apiResponse => apiResponse.json());
  }

  getPatientProcedureList() {
    this.patientParams = `/procedures`;
    return this.http.get( this.patientUrl + this.patientParams,
                        { withCredentials: true }
                        )
    .toPromise()
    .then(apiResponse => apiResponse.json());
  }

  getPatientMethodList() {
    this.patientParams = `/methods`;
    return this.http.get( this.patientUrl + this.patientParams,
                        { withCredentials: true }
                        )
    .toPromise()
    .then(apiResponse => apiResponse.json());
  }
  
}
