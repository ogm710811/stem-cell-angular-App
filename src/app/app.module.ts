import { BrowserModule    } from '@angular/platform-browser';
import { NgModule         } from '@angular/core';
import { FormsModule      } from '@angular/forms';
import { Routes }           from '@angular/router';
import { RouterModule     } from '@angular/router';
import { HttpModule       } from '@angular/http';

import { SessionService   } from './services/session.service';
import { LoggedInService  } from './services/logged-in.service';
import { PatientService   } from './services/patient.service';

import { AppComponent     } from './app.component';
import { HomeComponent    } from './home/home.component';
import { SignupComponent  } from './signup/signup.component';
import { LoginComponent   } from './login/login.component';
import { PatientListComponent   } from './patient-list/patient-list.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { PatientAddComponent    } from './patient-add/patient-add.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';

const routes: Routes = [
  { path: '',       redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',            component: HomeComponent },
  { path: 'signup',          component: SignupComponent },
  { path: 'login',           component: LoginComponent },
  { path: 'patients',        component: PatientListComponent },
  { path: 'patients/search', component: PatientSearchComponent },
  { path: 'patient/add',     component: PatientAddComponent },
  { path: 'patient/:id',     component: PatientDetailComponent },
  
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    PatientListComponent,
    PatientDetailComponent,
    PatientAddComponent,
    PatientSearchComponent
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
    PatientService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
