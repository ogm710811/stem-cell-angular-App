import { Component, OnInit } from '@angular/core';

import { SessionService     } from './services/session.service';
import { LoggedInService    } from './services/logged-in.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private user: any;
  private error: any;

  constructor(
    private session : SessionService, 
    private loggedInService: LoggedInService,
    public logOut : LoggedInService,
  ){}

  ngOnInit() {
    this.loggedInService.userInfoSubject.subscribe(
      userInfo => {
        console.log('*** THIS USER COMES FROM SUBJECT SERVICE  LoggedInService ***');
        console.log(userInfo);
        this.user = userInfo;
      }
    )
  }

  logout() {
    this.session.logout()
    .then(() => {
      this.user = null;
      this.error = null;

      // this use the LoggedInService to 
      // send the user information once he is logged out.
      // user info will be used for others components
      this.logOut.sendUserInfo(this.user);
    })
    .catch(err => this.error = err);
  }
}
