import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions       } from '@angular/http';
import { Subject    } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatientService {
  private patientUrl: string = 'http://localhost:3000/api.stem'
  private patientParams: string;

  // This Subject Object will be use to pass information
  // from each report component to detail report component.
  // Each report component will pass the index of the row
  // that was clicked to the detail report component.
  private reportDetailSource = new Subject<any>();
  // the report detail will subscribe to the property reportDetails$
  reportDetails$ = this.reportDetailSource.asObservable(); 

  constructor( private http: Http ) { }

  // this function will send the index of the row that was
  // clicked in the report page
  rowClicked (index) {
    this.reportDetailSource.next(index);
  } 

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

  getPatientWithCondition(condition) {
    this.patientParams = `/patients/search/condition?condition=${ condition }`;
    console.log(`CONDITION REQUEST IN SERVICE => ${ condition }`)
    return this.http.get( this.patientUrl + this.patientParams,
      { withCredentials: true }
      )
    .toPromise()
    .then(apiResponse => apiResponse.json());
  }
}
