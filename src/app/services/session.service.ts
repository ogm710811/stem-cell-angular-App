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
    this.sessionParams = '/signup';
    const theOriginalPromise = this.http.post( this.sessionUrl + this.sessionParams, 
                                               user,
                                               { withCredentials: true }
                                              ).toPromise();
    
      const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });
    
    return theParsedPromise;
  }

  login (credentials) {
      this.sessionParams = '/login';
      const theOriginalPromise = this.http.post( this.sessionUrl + this.sessionParams,
                                                credentials,
                                                { withCredentials: true },
                                                ).toPromise();

      const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });

    return theParsedPromise;
  }

  logout () {
    this.sessionParams = '/logout';
    return this.http.post( this.sessionUrl + this.sessionParams,
                           {},
                           { withCredentials: true }
                          )
    .toPromise()
    .then(result => result.json());
  }

  isLoggedIn () {
    this.sessionParams = '/loggedin';
    return this.http.get( this.sessionUrl + this.sessionParams,
                          { withCredentials: true }
                          )
    .toPromise()
    .then(result => result.json());
  }


  //***************************** */
  // const headers: Headers = new Headers();  
  // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');      
  // const opts: RequestOptions = new RequestOptions();      
  // opts.headers = headers;  
  // then use opts in the request as parameter
}
