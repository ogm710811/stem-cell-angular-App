import { Component, OnInit  } from '@angular/core';
import { ViewChild          } from '@angular/core';
import { NgForm             } from '@angular/forms';
import { SessionService     } from '../services/session.service';
import { LoggedInService    } from '../services/logged-in.service'

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

  private signupInfo : any =  {};
  private user: any;
  private error: any;


  constructor( 
    private session : SessionService,
    public loggedIn : LoggedInService,
  ) { }

  ngOnInit() {
  }

  signup() {
    const thePromise = this.session.signup(this.signupInfo);
    this.displayInfo();

    thePromise.then((userInfo) => {
      this.user = userInfo;      
      this.error = null;
      console.log(this.user);
    
    // this use the LoggedInService to 
    // send the user information once he is signed up.
    // user info will be used for others components
    this.loggedIn.sendUserInfo(this.user);
    // after pass the user info we clear the form
    // using the ViewChild
    this.signUpForm.reset();

    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err._body;
      console.log('*** THIS IS AN ERROR ***')
      console.log(this.error._body);
    });
  }

  displayInfo() {
    console.log('*** THIS IS THE SIGNUP INFO ***');
    console.log(this.signupInfo);
  }
}
