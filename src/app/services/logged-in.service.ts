import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';

@Injectable()
export class LoggedInService {

  /*
    A Subject is both an Observable (so we can subscribe() to it) and an 
    Observer (so we can call next() on it to emit a new value). 
    We exploit this feature. A Subject allows values to be multicast to many Observers. 
    We don't exploit this feature (we only have one Observer).
  */
  public userInfoSubject = new Subject<any>();

  constructor() { }

  sendUserInfo(userInfo) {
    this.userInfoSubject.next(userInfo);
  }
}
