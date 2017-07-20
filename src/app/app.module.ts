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
import { PatientListComponent        } from './patient-list/patient-list.component';
import { PatientDetailComponent      } from './patient-detail/patient-detail.component';
import { PatientAddComponent         } from './patient-add/patient-add.component';
import { PatientSearchComponent      } from './patient-search/patient-search.component';
import { PatientInfoFormComponent    } from './patient-info-form/patient-info-form.component';
import { MedicalInfoFormComponent    } from './medical-info-form/medical-info-form.component';
import { PhysicalInfoFormComponent   } from './physical-info-form/physical-info-form.component';
import { MedicationInfoFormComponent } from './medication-info-form/medication-info-form.component';
import { ConditionInfoFormComponent  } from './condition-info-form/condition-info-form.component';
import { LabInfoFormComponent        } from './lab-info-form/lab-info-form.component';
import { TestInfoFormComponent       } from './test-info-form/test-info-form.component';
import { ConsentInfoFormComponent    } from './consent-info-form/consent-info-form.component';
import { ProcedureInfoFormComponent  } from './procedure-info-form/procedure-info-form.component';
import { MethodInfoFormComponent     } from './method-info-form/method-info-form.component';
import { FollowInfoFormComponent     } from './follow-info-form/follow-info-form.component';
import { PatientConditionReportComponent } from './patient-condition-report/patient-condition-report.component';
import { PatientProcedureReportComponent } from './patient-procedure-report/patient-procedure-report.component';
import { PatientMethodReportComponent    } from './patient-method-report/patient-method-report.component';
import { PatientConditionReportDetailComponent } from './patient-condition-report-detail/patient-condition-report-detail.component';

const routes: Routes = [
  { path: '',                redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',                       component: HomeComponent },
  { path: 'signup',                     component: SignupComponent },
  { path: 'login',                      component: LoginComponent },
  { path: 'patients',                   component: PatientListComponent },
  { path: 'patients/condition',         component: PatientConditionReportComponent },
  { path: 'patients/condition/detail',  component: PatientConditionReportDetailComponent },
  { path: 'patients/procedure',         component: PatientProcedureReportComponent },
  { path: 'patients/method',            component: PatientMethodReportComponent },
  { path: 'patients/search',            component: PatientSearchComponent },
  { path: 'patient/add',                component: PatientAddComponent,
    children: [
      // in order to don't redirect to home page ( path: '' ) the first path in the 
      // children component must have a redirect to the first children. 
      { path: '',           redirectTo: 'info', pathMatch: 'full' },
      { path: 'info',       component: PatientInfoFormComponent },
      { path: 'medical',    component: MedicalInfoFormComponent },
      { path: 'physical',   component: PhysicalInfoFormComponent },
      { path: 'medication', component: MedicationInfoFormComponent },
      { path: 'condition',  component: ConditionInfoFormComponent },
      { path: 'lab',        component: LabInfoFormComponent },
      { path: 'test',       component: TestInfoFormComponent },
      { path: 'consent',    component: ConsentInfoFormComponent },
      { path: 'procedure',  component: ProcedureInfoFormComponent },
      { path: 'method',     component: MethodInfoFormComponent },
      { path: 'follow',     component: FollowInfoFormComponent },
    ]
  },
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
    PatientSearchComponent,
    PatientInfoFormComponent,
    MedicalInfoFormComponent,
    PhysicalInfoFormComponent,
    MedicationInfoFormComponent,
    ConditionInfoFormComponent,
    LabInfoFormComponent,
    TestInfoFormComponent,
    ConsentInfoFormComponent,
    ProcedureInfoFormComponent,
    MethodInfoFormComponent,
    FollowInfoFormComponent,
    PatientConditionReportComponent,
    PatientProcedureReportComponent,
    PatientMethodReportComponent,
    PatientConditionReportDetailComponent,
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
