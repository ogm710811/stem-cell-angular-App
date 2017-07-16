import { Component, OnInit } from '@angular/core';
import { Router            } from '@angular/router';

import { SessionService     } from './services/session.service';
import { LoggedInService    } from './services/logged-in.service';

import { User               } from './model/user-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private theUser: User;
  private error: String;
  

  constructor(
    private session : SessionService, 
    private loggedIn: LoggedInService,
    private router: Router,
  ){}

  ngOnInit() {
    this.loggedIn.userInfoSubject.subscribe(
      userInfo => {
        this.theUser = new User( userInfo._id, userInfo.updated_at, userInfo.created_at, 
        userInfo.username, userInfo.fullName, userInfo.role )
        this.displayInfo();
      }
    )

      // this use the LoggedInService thru a Subject Object to 
      // send the user information once he is logged in.
      // user info will be used for others components
      //this.loggedIn.sendUserInfo(this.user);
      this.loggedIn.sendUserInfo(this.theUser);
  }
 logout() {
    this.session.logout()
    .then(() => {
      this.theUser = null;
      this.error = null;
      
      // this use the LoggedInService to 
      // send the user information once he is logged out.
      // user info will be used for others components
      this.loggedIn.sendUserInfo(this.theUser);
    })
    .catch(err => this.error = err);

    // navigate to home page and destroy any component
    // that is in the screen at that moment
    this.router.navigate(['']);
  }

  displayInfo() {
    console.log(`USER AT NAVIGATION BAR COMPONENT => ${ this.theUser.getFullName() }`);
  }
}
