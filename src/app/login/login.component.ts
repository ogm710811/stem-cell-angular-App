import { Component, OnInit  } from '@angular/core';
import { ViewChild          } from '@angular/core';
import { NgForm             } from '@angular/forms';
import { SessionService     } from '../services/session.service';
import { LoggedInService    } from '../services/logged-in.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // using ViewChild allows to reset the form ones the
  // user click the submit button
  @ViewChild('logInForm') logInForm: NgForm;

  private loginInfo : any =  {};
  private user: any;
  private error: any;
  private today: Date = new Date();

  constructor(
    private session : SessionService,
    public loggedIn : LoggedInService,
    public logOut : LoggedInService,
  ) { }

  ngOnInit() {
    this.logOut.userInfoSubject.subscribe(
      userInfo => {
        console.log('*** THIS USER COMES FROM SUBJECT SERVICE  LoggedInService AFTER LOG OUT ***');
        console.log(userInfo);
        this.user = userInfo;
      }
    )
  }
  login() {
    const thePromise = this.session.login(this.loginInfo);
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
      this.logInForm.reset();
    });

    thePromise.catch((err) => {
      this.user = null;
      this.error = err._body;
      console.log('*** THIS IS AN ERROR ***')
      console.log(this.error._body);
    });
  }

  displayInfo() {
    console.log('*** THIS IS THE LOGIN INFO FROM THE FORM ***');
    console.log(this.loginInfo);
  }
}
