import { Component, OnInit } from '@angular/core';

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
    private loggedInService: LoggedInService,
  ){}

  ngOnInit() {
    this.loggedInService.userInfoSubject.subscribe(
      userInfo => {
        console.log('*** THIS USER COMES FROM APPCOMPONENT NAVBAR ***');
        console.log(userInfo);
        this.user = userInfo;
      }
    )
  }
}
