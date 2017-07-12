import { Component, OnInit } from '@angular/core';

import { SessionService    } from '../services/session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private signupInfo : any =  {};
  private user: any;
  private error: any;


  constructor( private session : SessionService ) { }

  ngOnInit() {
  }

  signup() {
    const thePromise = this.session.signup(this.signupInfo);
    this.displayInfo();

    thePromise.then((userInfo) => {
      this.user = userInfo;      
      this.error = null;
      console.log(this.user);
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
