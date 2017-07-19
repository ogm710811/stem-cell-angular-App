import { Injectable } from '@angular/core';
import { Subject    } from 'rxjs/Subject';

import { User       } from '../model/user-model';

@Injectable()
export class LoggedInService {

  /*
    This property will save the user info value ones the
    user log in or sign up. That way the user will available
    for all components in the dropdowns of the nav bar ( Patients, Reports, etc)
  */
  //*********   FOR SOME REASON THE SUBJECT SUBSCRIBE DOESN'T WORK IN THE DROPDOWNS MENU *****/
  private theUser : User;

  getUserInfo() {
    return this.theUser;
  }

  setUserInfo(userInfo) {
    this.theUser = userInfo;
    console.log(`USER AT LOGGED IN SERVICE => ${ this.theUser.getFullName() }`);
  }

  /*
    A Subject is both an Observable (so we can subscribe() to it) and an 
    Observer (so we can call next() on it to emit a new value). 
    We exploit this feature. A Subject allows values to be multicast to many Observers. 
    We don't exploit this feature (we only have one Observer).
  */

   // AppComponent will subscribe to "loggedIn$"
   // and will keep track of the session 
  private loggedInSource = new Subject<any>();
  loggedIn$ = this.loggedInSource.asObservable(); 

  constructor() { }

  loggedIn (userInfo) {
    this.loggedInSource.next(userInfo);
    this.theUser = userInfo;
  } 

}
