import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientConditionReportDetailComponent } from './patient-condition-report-detail.component';

describe('PatientConditionReportDetailComponent', () => {
  let component: PatientConditionReportDetailComponent;
  let fixture: ComponentFixture<PatientConditionReportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientConditionReportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientConditionReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
