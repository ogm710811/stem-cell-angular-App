import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http       } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SessionService {
  private sessionUrl: string = 'http://localhost:3000/api.stem'
  private sessionParams: string;

  constructor( private http: Http ) { }

  signup (user) {
    this.sessionParams = '/signup';

    const theOriginalPromise = this.http.post( this.sessionUrl + this.sessionParams, user).toPromise();
    
    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });
    
    return theParsedPromise;
  }

  isLoggedIn () {
    this.sessionParams = '/loggedin';
    
    return this.http.get( this.sessionUrl + this.sessionParams )
      .toPromise()
      .then(result => result.json());
  }
}
