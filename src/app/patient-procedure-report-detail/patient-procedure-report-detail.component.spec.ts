import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProcedureReportDetailComponent } from './patient-procedure-report-detail.component';

describe('PatientProcedureReportDetailComponent', () => {
  let component: PatientProcedureReportDetailComponent;
  let fixture: ComponentFixture<PatientProcedureReportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientProcedureReportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProcedureReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
