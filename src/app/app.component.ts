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
  isLoggedIn: boolean = false;
  

  constructor(
    private session : SessionService, 
    private loggedIn: LoggedInService,
    private router: Router,
  ){}

  ngOnInit() {
    this.loggedIn.loggedIn$.subscribe((userFromApi) => {
      this.isLoggedIn = true;
    });


    this.session.isLoggedIn()
    .then((userInfo) => {
      this.isLoggedIn = true;
      this.loggedIn.setUserInfo(userInfo);
    })
    .catch((err) => {
      this.router.navigate(['/']);
    });
  }
 logout() {
    this.session.logout()
    .then(() => {
      this.theUser = null;
      this.error = null;
      
      // this use the LoggedInService to 
      // send the user information once he is logged out.
      // user info will be used for others components
      //this.loggedIn.loggedIn(this.theUser);
      this.loggedIn.loggedIn(this.theUser);
      this.isLoggedIn = false;
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
