import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatientService {
  private patientUrl: string = 'http://localhost:3000/api.stem'
  private patientParams: string;

  constructor( private http: Http ) { }

  getPatientList() {
    this.patientParams = '/patients'
    return this.http.get( this.patientUrl + this.patientParams,
                          { withCredentials: true})
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
  
  getOnePatient(id) {
    this.patientParams = `/patients/${ id }`
    return this.http.get( this.patientUrl + this.patientParams,
                          { withCredentials: true })
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
}     
