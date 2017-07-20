import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMethodReportComponent } from './patient-method-report.component';

describe('PatientMethodReportComponent', () => {
  let component: PatientMethodReportComponent;
  let fixture: ComponentFixture<PatientMethodReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMethodReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMethodReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
