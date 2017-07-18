import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInfoFormComponent } from './patient-info-form.component';

describe('PatientInfoFormComponent', () => {
  let component: PatientInfoFormComponent;
  let fixture: ComponentFixture<PatientInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
