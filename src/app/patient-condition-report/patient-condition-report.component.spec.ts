import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientConditionReportComponent } from './patient-condition-report.component';

describe('PatientConditionReportComponent', () => {
  let component: PatientConditionReportComponent;
  let fixture: ComponentFixture<PatientConditionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientConditionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientConditionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
