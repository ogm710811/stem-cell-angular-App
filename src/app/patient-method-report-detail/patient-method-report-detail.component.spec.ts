import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMethodReportDetailComponent } from './patient-method-report-detail.component';

describe('PatientMethodReportDetailComponent', () => {
  let component: PatientMethodReportDetailComponent;
  let fixture: ComponentFixture<PatientMethodReportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMethodReportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMethodReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
