import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions       } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PatientService {
  private patientUrl: string = 'http://localhost:3000/api.stem'
  private patientParams: string;

  constructor( private http: Http ) { }

  getPatientList() {
    const headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.patientParams = '/patients'
    return this.http.get( this.patientUrl + this.patientParams,
                          /*{ withCredentials: true}*/
                        opts)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }
  
  getOnePatient(id) {
    const headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.patientParams = `/patients/${ id }`
    return this.http.get( this.patientUrl + this.patientParams,
                          /*{ withCredentials: true }*/
                        opts)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  searchPatient(phoneNumber) {
    const headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.patientParams = `/patients/search?phoneNumber=${ phoneNumber }`
    return this.http.get( this.patientUrl + this.patientParams,
                        /*{ withCredentials: true }*/
                      opts)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }
}     
