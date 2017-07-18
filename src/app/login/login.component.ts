import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ViewChild          } from '@angular/core';
import { NgForm             } from '@angular/forms';

import { SessionService     } from '../services/session.service';
import { LoggedInService    } from '../services/logged-in.service'

import { User               } from '../model/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  // using ViewChild allows to reset the form ones the
  // user click the submit button
  @ViewChild('logInForm') logInForm: NgForm;

  private loginInfo : Object =  {};
  // private user: any = '';
  private theUser : User;
  private error   : String;
  private today   : Date = new Date();

  constructor(
    private session : SessionService,
    public loggedIn : LoggedInService,
  ) { }

  ngOnInit() {
    // get user info from the service 
    // this.loggedIn.userInfoSubject.subscribe(
    //   userInfo => {
    //     // this.user = userInfo;
    //     this.theUser = userInfo
    //     console.log(`USER AT LOGIN PAGE => ${ this.theUser.getFullName() }`);
    //   }
    // )
  }

  /*
    The user info is passed from this component to the service LoggedInService
    ones the component is destroy ngOnDestroy() that way the user info (user._id) will be
    available in other components to be use in *ngIf derective.
  */
  ngOnDestroy() {
      // this.loggedIn.userInfo = this.user;
      // console.log('*** LOGIN PAGE => USER INFO => OnDestroy() ***');
      // console.log(this.user._id);
      // this.loggedIn.userInfo = this.user._id;
      // console.log(this.user._id);
  }
  login() {
    const thePromise = this.session.login(this.loginInfo);
    
    thePromise.then((userInfo) => {
      //this.user = userInfo; 
      this.theUser = new User( userInfo._id, userInfo.updated_at, userInfo.created_at, 
        userInfo.username, userInfo.fullName, userInfo.role )
      if (this.theUser) {
        this.displayInfo();
      }

      this.error = null;
      
      // this use the LoggedInService thru a Subject Object to 
      // send the user information once he is logged in.
      // user info will be used for others components
      //this.loggedIn.sendUserInfo(this.user);
      this.loggedIn.sendUserInfo(this.theUser);

      // after pass the user info we clear the form
      // using the ViewChild
      this.logInForm.reset();
    });

    thePromise.catch((err) => {
      //this.user = '';
      this.theUser = null;
      const apiError = err.json();
      this.error = apiError.message;
      this.logInForm.reset();
    });
  }

  displayInfo() {
    console.log(`USER AT LOGIN PAGE => ${ this.theUser.getFullName() }`);
  }
}
