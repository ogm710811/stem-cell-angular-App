import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationInfoFormComponent } from './medication-info-form.component';

describe('MedicationInfoFormComponent', () => {
  let component: MedicationInfoFormComponent;
  let fixture: ComponentFixture<MedicationInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
