import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';

@Injectable()
export class LoggedInService {

  /*
    This property userInfo will save the user._Id value ones the
    user log in or sign up. That way the user._Id will available
    for all compoenents in the app using this service.
  */
  public userInfo: string;

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
