import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http       } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class SessionService {
  private sessionUrl: string;

  constructor( private http: Http ) { }

   signup (user) {
    this.sessionUrl = 'http://localhost:3000/api.stem/signup';

    const theOriginalPromise = this.http.post(this.sessionUrl, user).toPromise();
    
    const theParsedPromise = theOriginalPromise.then((result) => {
      return result.json();
    });
    
    return theParsedPromise;
  }
}
