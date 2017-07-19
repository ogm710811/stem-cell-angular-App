import { Component, OnInit  } from '@angular/core';
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
export class LoginComponent implements OnInit {
  // using ViewChild allows to reset the form ones the
  // user click the submit button
  @ViewChild('logInForm') logInForm: NgForm;

  private loginInfo : Object =  {};
  private theUser : User;
  private error   : String;
  private today   : Date = new Date();

  constructor(
    private session : SessionService,
    public loggedIn : LoggedInService,
  ) { }

  ngOnInit() {
  }

  login() {
    const thePromise = this.session.login(this.loginInfo);
    
    thePromise.then((userInfo) => {
      this.theUser = new User( userInfo._id, userInfo.updated_at, userInfo.created_at, 
        userInfo.username, userInfo.fullName, userInfo.role )
      if (this.theUser) {
        this.displayInfo();
      }

      this.error = null;
      
      // this use the LoggedInService thru a Subject Object to 
      // send the user information once he is logged in.
      this.loggedIn.loggedIn(this.theUser);
      this.loggedIn.setUserInfo(this.theUser);

      // after pass the user info we clear the form
      // using the ViewChild
      this.logInForm.reset();
    });

    thePromise.catch((err) => {
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
