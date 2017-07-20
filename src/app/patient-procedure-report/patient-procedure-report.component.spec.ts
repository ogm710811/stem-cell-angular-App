import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProcedureReportComponent } from './patient-procedure-report.component';

describe('PatientProcedureReportComponent', () => {
  let component: PatientProcedureReportComponent;
  let fixture: ComponentFixture<PatientProcedureReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientProcedureReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProcedureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
