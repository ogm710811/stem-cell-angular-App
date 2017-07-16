import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ViewChild          } from '@angular/core';
import { NgForm             } from '@angular/forms';
import { Router             } from '@angular/router';

import { SessionService     } from '../services/session.service';
import { LoggedInService    } from '../services/logged-in.service'

import { User               } from '../model/user-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // using ViewChild allows to reset the form ones the
  // user click the submit button
  // in order to do that we define a template variable
  // in the input form (<form #signUpForm class="callus" id="app_form">) 
  // then we use that variable in the ViewChild setup
  @ViewChild('signUpForm') signUpForm: NgForm;

  private signupInfo : Object =  {};
  private theUser    : User;
  private error      : String;

  constructor( 
    private session : SessionService,
    public loggedIn : LoggedInService,
    private router  : Router,
  ) { }

  ngOnInit() {
  }

  signup() {
    const thePromise = this.session.signup(this.signupInfo);
    
    thePromise.then((userInfo) => {
      this.theUser = new User( userInfo._id, userInfo.updated_at, userInfo.created_at, 
        userInfo.username, userInfo.fullName, userInfo.role )
      this.displayInfo();

      this.error = null;
      
      // this use the LoggedInService thru a Subject Object to 
      // send the user information once he is signed up.
      // user info will be used for others components
      this.loggedIn.sendUserInfo(this.theUser);

      // after pass the user info we clear the form
      // using the ViewChild
      this.signUpForm.reset();
      this.router.navigate(['']);
    });

    thePromise.catch((err) => {
      this.theUser = null;
      const apiError = err.json();
      this.error = apiError.message;
      this.signUpForm.reset();
    });
  }

  displayInfo() {
    console.log(`NEW USER AT SIGNUP PAGE => ${ this.theUser.getFullName() }`);
  }
}
