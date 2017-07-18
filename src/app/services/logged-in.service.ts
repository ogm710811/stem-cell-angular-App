import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';

import { User       } from '../model/user-model';

@Injectable()
export class LoggedInService {

  /*
    This property will save the user info value ones the
    user log in or sign up. That way the user will available
    for all components in the app using this service.
  */
  private theUser : User;

  getUserInfo() {
    return this.theUser;
  }

  /*
    A Subject is both an Observable (so we can subscribe() to it) and an 
    Observer (so we can call next() on it to emit a new value). 
    We exploit this feature. A Subject allows values to be multicast to many Observers. 
    We don't exploit this feature (we only have one Observer).
  */
  public userInfoSubject = new Subject<any>();

  constructor() { }

  sendUserInfo(userInfo) {
    if (userInfo) {
      console.log(`USER AT LOGGED IN SERVICE ${ userInfo.getFullName() }`);
    }
    
    this.userInfoSubject.next(userInfo);
    this.theUser = userInfo;
  }
}
