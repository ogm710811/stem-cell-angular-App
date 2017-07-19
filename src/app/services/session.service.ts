import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions       } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SessionService {
  private sessionUrl: string = 'http://localhost:3000/api.stem'
  private sessionParams: string;

  constructor( private http: Http ) { }

  signup (user) {
    const headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.sessionParams = '/signup';
    const theOriginalPromise = this.http.post( this.sessionUrl + this.sessionParams, 
                                               user,
                                               /*{ withCredentials: true }*/
                                              opts).toPromise();
    
    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });
    
    return theParsedPromise;
  }

  login (credentials) {
    const headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.sessionParams = '/login';
    const theOriginalPromise = this.http.post( this.sessionUrl + this.sessionParams,
                                               credentials,
                                             /*{ withCredentials: true },*/
                                            opts).toPromise();

    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  logout () {
    const headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.sessionParams = '/logout';
    return this.http.post( this.sessionUrl + this.sessionParams,
                           {},
                           /*{ withCredentials: true }*/
                          opts)
      .toPromise()
      .then(result => result.json());
  }

  isLoggedIn () {
    const headers: Headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    this.sessionParams = '/loggedin';
    return this.http.get( this.sessionUrl + this.sessionParams,
                          /*{ withCredentials: true }*/
                          opts)
      .toPromise()
      .then(result => result.json());
  }
}
