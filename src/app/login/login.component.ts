import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ViewChild          } from '@angular/core';
import { NgForm             } from '@angular/forms';
import { SessionService     } from '../services/session.service';
import { LoggedInService    } from '../services/logged-in.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

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
        console.log('*** LOGIN PAGE => USER INFO ***');
        this.user = userInfo;
        console.log(this.user);
      }
    )
  }

  /*
    The user info is passed from this component to the service LoggedInService
    ones the component is destroy ngOnDestroy() that way the user info (user._id) will be
    available in other components to be use in *ngIf derective.
  */
  ngOnDestroy() {
    // this.loggedIn.userInfo = this.user;
    console.log('*** LOGIN PAGE => USER INFO => OnDestroy() ***');
    console.log(this.user._id);
    this.loggedIn.userInfo = this.user._id;
    console.log(this.user._id);
  }
  login() {
    const thePromise = this.session.login(this.loginInfo);
    //this.displayInfo();

    thePromise.then((userInfo) => {
      this.user = userInfo;      
      this.error = null;
      //console.log(this.user);

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
      // console.log('*** THIS IS AN ERROR ***')
      // console.log(this.error._body);
    });
  }

  displayInfo() {
    console.log('*** THIS IS THE LOGIN INFO FROM THE FORM ***');
    console.log(this.loginInfo);
  }
}
