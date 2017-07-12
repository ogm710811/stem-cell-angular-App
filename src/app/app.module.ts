import { BrowserModule    } from '@angular/platform-browser';
import { NgModule         } from '@angular/core';
import { FormsModule      } from '@angular/forms';
import { Routes }           from '@angular/router';
import { RouterModule     } from '@angular/router';
import { HttpModule       } from '@angular/http';

import { AppComponent     } from './app.component';
import { HomeComponent    } from './home/home.component';
import { SignupComponent  } from './signup/signup.component';

import { SessionService }   from './services/session.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',    component: HomeComponent },
  { path: 'signup',  component: SignupComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)  //  <!-- "routes" is the array defined above
  ],
  providers: [
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
