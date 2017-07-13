import { BrowserModule    } from '@angular/platform-browser';
import { NgModule         } from '@angular/core';
import { FormsModule      } from '@angular/forms';
import { Routes }           from '@angular/router';
import { RouterModule     } from '@angular/router';
import { HttpModule       } from '@angular/http';

import { SessionService   } from './services/session.service';
import { LoggedInService  } from './services/logged-in.service';

import { AppComponent     } from './app.component';
import { HomeComponent    } from './home/home.component';
import { SignupComponent  } from './signup/signup.component';
import { LoginComponent   } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',    component: HomeComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'login',   component: LoginComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [
    SessionService,
    LoggedInService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
